import {
  AnimationContextProvider as Provider,
  useAnimation,
} from "./components/Animate/AnimationContext";

export const { Animation, animate } = useAnimation();
export const AnimationContextProvider = Provider;
