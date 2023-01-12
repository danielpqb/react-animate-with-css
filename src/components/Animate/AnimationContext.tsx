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
  const { animate } = useContext(AnimationContext);
  return { animate };
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
    repeat = 1,
    direction = "normal",
    timing = "linear",
    removeAfter = false,
  }: {
    id: string;
    name: string;
    duration?: number;
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
    const _duration = (duration / 1000).toFixed(3).toString() + "s";

    if (!animation.isAnimating) {
      putAnimation(id, { isAnimating: true, isRemoved: false });
      element.style.animationName = name;
      element.style.animationDuration = _duration;
      element.style.animationIterationCount = repeat.toString();
      element.style.animationDirection = direction;
      element.style.animationTimingFunction = timing;

      setTimeout(() => {
        element.style.animationName = "";
        if (removeAfter) {
          putAnimation(id, { isRemoved: true });
          element.classList.add("removed");
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
  if (animateIn === undefined) {
    animateIn = { name: "fadeIn", duration: 1000 };
  }
  if (animateIn.duration === undefined) {
    animateIn.duration = 1000;
  }
  animateIn.name = (animateIn.name as string).replace(
    "animate__",
    ""
  ) as AnimationNames;

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
          putAnimation(id, {
            isAnimating: false,
          });
          (element as any).current.style.animationName = "";
        }, animateIn?.duration);
      }
    };
  }, []);

  return (
    <div
      ref={element}
      style={{
        animationName: animateIn.name as string,
        animationDuration:
          (animateIn.duration / 1000).toFixed(3).toString() + "s",
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
