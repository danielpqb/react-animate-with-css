import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AnimateProps,
  AnimatePropsGeneric,
  Animations,
  AnimationStates,
} from "./types";
import "animate.css";

const AnimationContext = createContext({} as AnimationStates);

export const useAnimate = () => {
  const { animate, animations } = useContext(AnimationContext);
  return { animate, animations };
};

const useAnimationContext = () => {
  return { ...useContext(AnimationContext), Animation };
};

export function AnimationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [animations, setAnimations] = useState({});

  function putAnimation(id: string, params: Partial<Omit<Animations, "id">>) {
    setAnimations((old: { [id: string]: Animations }) => {
      return { ...old, [id]: { ...old[id], ...params } };
    });
  }

  function animate({
    id,
    name,
    duration,
    delay,
    repeat,
    direction,
    timing,
    removeAfter,
  }: AnimateProps) {
    const animation: Animations = animations[id as keyof object];
    const element = animation?.element;
    if (!element) return;

    const animateProps = setDefaultAnimateProps({
      name: name as string,
      duration,
      delay,
      repeat,
      direction,
      timing,
      removeAfter,
    });

    const animationStyle = createAnimationStyle(animateProps);

    if (!animation.isAnimating) {
      putAnimation(id, { isAnimating: true, isRemoved: false });
      Object.assign(element.style, { ...element.style, ...animationStyle });

      setTimeout(() => {
        element.style.animationName = "";
        if (removeAfter) {
          putAnimation(id, { isRemoved: true });
        }
        putAnimation(id, { isAnimating: false });
      }, animateProps.duration * animateProps.repeat);
    }
  }

  const states = { animations, putAnimation, animate };

  return (
    <AnimationContext.Provider value={states as AnimationStates}>
      {children}
    </AnimationContext.Provider>
  );
}

export function Animation({
  id,
  animateIn,
  children,
  style,
}: {
  id?: string;
  animateIn?: Omit<AnimateProps, "id">;
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  const { animations, putAnimation } = useAnimationContext();

  const animateProps = setDefaultAnimateProps(animateIn as any);
  const animationStyle = animations[id as keyof object]
    ? {}
    : createAnimationStyle(animateProps);

  const element = useRef(null);

  useEffect(() => {
    return () => {
      if (id && !animations[id]) {
        putAnimation(id, {
          isAnimating: true,
          element: element.current || undefined,
        });

        setTimeout(() => {
          (element as any).current.style.animationName = "";
          if (animateProps.removeAfter) {
            putAnimation(id, { isRemoved: true });
          }
          putAnimation(id, {
            isAnimating: false,
          });
        }, animateProps.duration * animateProps.repeat);
      }
    };
  }, []);

  return (
    <div
      ref={element}
      style={{
        flexDirection: "inherit",
        width: "fit-content",
        height: "fit-content",
        ...style,
        display:
          animations[id as keyof object]?.isRemoved === true
            ? "none"
            : "inherit",
        ...animationStyle,
      }}
    >
      {children}
    </div>
  );
}

function setDefaultAnimateProps(animateProps?: AnimatePropsGeneric) {
  if (!animateProps) animateProps = { name: "fadeIn" };
  if (!animateProps?.direction) animateProps.direction = "normal";
  if (!animateProps?.duration) animateProps.duration = 1000;
  if (!animateProps?.delay) animateProps.delay = 0;
  if (!animateProps?.removeAfter) animateProps.removeAfter = false;
  if (!animateProps?.repeat) animateProps.repeat = 1;
  if (!animateProps?.timing) animateProps.timing = "linear";

  animateProps.name = (animateProps.name as string).replace("animate__", "");

  if (animateProps?.direction?.includes("alternate")) {
    animateProps.repeat *= 2;
    animateProps.duration /= 2;
  }

  return animateProps as Required<AnimatePropsGeneric>;
}

function createAnimationStyle(animateProps: Required<AnimatePropsGeneric>) {
  const animationStyle = {
    animationName: animateProps.name,
    animationDuration: animateProps.duration.toString() + "ms",
    animationIterationCount: animateProps.repeat?.toString(),
    animationTimingFunction: animateProps.timing,
    animationDelay: animateProps.delay.toString() + "ms",
  };

  return animationStyle;
}
