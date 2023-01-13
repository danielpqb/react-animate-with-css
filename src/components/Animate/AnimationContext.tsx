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
  AnimationNames,
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
    duration = 1000,
    delay = 0,
    repeat = 1,
    direction = "normal",
    timing = "linear",
    removeAfter = false,
  }: {
    id: string;
    name: string;
    duration?: number;
    delay?: number;
    repeat?: number;
    direction?: string;
    timing?: string;
    removeAfter?: boolean;
  }) {
    const animation: Animations = animations[id as keyof object];
    const element = animation?.element;
    if (!element) return;
    if (direction.includes("alternate")) {
      repeat *= 2;
      duration /= 2;
    }
    const _duration = duration.toString() + "ms";

    if (!animation.isAnimating) {
      putAnimation(id, { isAnimating: true, isRemoved: false });
      element.style.animationName = name;
      element.style.animationDuration = _duration;
      element.style.animationDelay = delay.toString() + "ms";
      element.style.animationIterationCount = repeat.toString();
      element.style.animationDirection = direction;
      element.style.animationTimingFunction = timing;

      setTimeout(() => {
        element.style.animationName = "";
        if (removeAfter) {
          putAnimation(id, { isRemoved: true });
        }
        putAnimation(id, { isAnimating: false });
      }, duration * repeat);
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
}: {
  id?: string;
  animateIn?: Omit<AnimateProps, "id">;
  children: ReactNode;
}) {
  if (!animateIn) animateIn = { name: "fadeIn" };
  if (!animateIn?.direction) animateIn.direction = "normal";
  if (!animateIn?.duration) animateIn.duration = 1000;
  if (!animateIn?.delay) animateIn.delay = 0;
  if (!animateIn?.removeAfter) animateIn.removeAfter = false;
  if (!animateIn?.repeat) animateIn.repeat = 1;
  if (!animateIn?.timing) animateIn.timing = "linear";

  animateIn.name = (animateIn.name as string).replace(
    "animate__",
    ""
  ) as AnimationNames;

  if (animateIn.direction.includes("alternate")) {
    animateIn.repeat *= 2;
    animateIn.duration /= 2;
  }

  const element = useRef(null);

  const { animations, putAnimation } = useAnimationContext();

  useEffect(() => {
    return () => {
      if (id && !animations[id]) {
        putAnimation(id, {
          isAnimating: true,
          element: element.current || undefined,
        });

        setTimeout(() => {
          (element as any).current.style.animationName = "";
          if (animateIn?.removeAfter) {
            putAnimation(id, { isRemoved: true });
          }
          putAnimation(id, {
            isAnimating: false,
          });
        }, (animateIn?.duration || 0) * (animateIn?.repeat || 0));
      }
    };
  }, []);

  return (
    <div
      ref={element}
      style={{
        animationName: animateIn.name as string,
        animationDuration: animateIn.duration.toString() + "ms",
        animationIterationCount: animateIn.repeat?.toString(),
        animationTimingFunction: animateIn.timing,
        animationDelay: animateIn.delay.toString(),
        display:
          animations[id as keyof object]?.isRemoved === true
            ? "none"
            : "inherit",
        flexDirection: "inherit",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      {children}
    </div>
  );
}
