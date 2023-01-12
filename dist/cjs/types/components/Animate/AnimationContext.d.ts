import { ReactNode } from "react";
import { AnimateProps } from "./types";
import "animate.css";
export declare const useAnimate: () => {
    animate: ({ id, name, duration, repeat, direction, timing, removeAfter, }: AnimateProps) => void;
};
export declare function AnimationContextProvider({ children, }: {
    children: ReactNode;
}): JSX.Element;
export declare function Animation({ id, animateIn, children, }: {
    id?: string;
    animateIn?: Omit<AnimateProps, "id">;
    children: ReactNode;
}): JSX.Element;
//# sourceMappingURL=AnimationContext.d.ts.map