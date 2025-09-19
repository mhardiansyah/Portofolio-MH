"use client";

import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ForwardedRef,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type MotionStyle = {
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
};

export type Transition = {
  duration?: number;
  delay?: number;
  ease?: string;
};

export type Viewport = {
  once?: boolean;
  amount?: number;
};

export type MotionProps = {
  initial?: MotionStyle;
  animate?: MotionStyle;
  whileInView?: MotionStyle;
  transition?: Transition;
  viewport?: Viewport;
  children?: ReactNode;
};

type MotionComponentProps<T extends ElementType> = MotionProps &
  Omit<ComponentPropsWithoutRef<T>, keyof MotionProps>;

function assignRef<T>(ref: ForwardedRef<T>, value: T) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    (ref as { current: T }).current = value;
  }
}

function mapStyle(style?: MotionStyle) {
  if (!style) return {} as CSSProperties;
  const result: CSSProperties = {};
  if (typeof style.opacity === "number") {
    result.opacity = style.opacity;
  }
  const transforms: string[] = [];
  if (typeof style.x === "number") {
    transforms.push(`translateX(${style.x}px)`);
  }
  if (typeof style.y === "number") {
    transforms.push(`translateY(${style.y}px)`);
  }
  if (typeof style.scale === "number") {
    transforms.push(`scale(${style.scale})`);
  }
  if (transforms.length > 0) {
    result.transform = transforms.join(" ");
  }
  return result;
}

function mergeStyles(
  base: CSSProperties,
  motion: CSSProperties,
  transition?: Transition,
) {
  const transitionValue = `opacity ${transition?.duration ?? 0.6}s ${
    transition?.ease ?? "cubic-bezier(0.22, 1, 0.36, 1)"
  } ${transition?.delay ?? 0}s, transform ${transition?.duration ?? 0.6}s ${
    transition?.ease ?? "cubic-bezier(0.22, 1, 0.36, 1)"
  } ${transition?.delay ?? 0}s`;

  return {
    ...base,
    ...motion,
    transition: transitionValue,
    willChange: "opacity, transform",
  } as CSSProperties;
}

function createMotionComponent<T extends ElementType>(element: T) {
  return forwardRef<HTMLElement, MotionComponentProps<T>>(function MotionBase(
    { initial, animate, whileInView, transition, viewport, style, ...rest },
    ref,
  ) {
    const localRef = useRef<HTMLElement | null>(null);
    const [hasEntered, setHasEntered] = useState(() => !whileInView);

    useEffect(() => {
      if (!whileInView) return;
      const element = localRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;
          if (entry.isIntersecting) {
            setHasEntered(true);
            if (viewport?.once ?? true) {
              observer.disconnect();
            }
          } else if (!(viewport?.once ?? true)) {
            setHasEntered(false);
          }
        },
        { threshold: viewport?.amount ?? 0.2 },
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, [viewport, whileInView]);

    const styles = useMemo(() => {
      const base = (style ?? {}) as CSSProperties;
      if (!whileInView && animate) {
        return mergeStyles(base, mapStyle(animate), transition);
      }

      const origin = mapStyle(initial ?? {});
      const target = mapStyle(whileInView ?? animate ?? {});

      return mergeStyles(base, hasEntered ? target : origin, transition);
    }, [animate, hasEntered, initial, style, transition, whileInView]);

    const Component = element as ElementType;

    return (
      <Component
        ref={(node: HTMLElement | null) => {
          localRef.current = node;
          assignRef(ref, node);
        }}
        style={styles}
        {...(rest as ComponentPropsWithoutRef<T>)}
      />
    );
  });
}

type MotionFactory = {
  [K in keyof JSX.IntrinsicElements]: ReturnType<typeof createMotionComponent<K>>;
};

const cache = new Map<
  keyof JSX.IntrinsicElements,
  MotionFactory[keyof JSX.IntrinsicElements]
>();

const motion = new Proxy({} as MotionFactory, {
  get(_, element: keyof JSX.IntrinsicElements) {
    if (!cache.has(element)) {
      cache.set(element, createMotionComponent(element));
    }
    return cache.get(element) as MotionFactory[keyof JSX.IntrinsicElements];
  },
});

export { motion };

