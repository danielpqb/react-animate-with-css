import { ReactNode } from 'react';

type AnimateProps = {
    id: string;
    name: AnimationNames;
    duration?: number;
    repeat?: number;
    direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
    timing?: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | (string & {});
    removeAfter?: boolean;
};
type AnimationNames = "bounce" | "flash" | "pulse" | "rubberBand" | "shakeX" | "shakeY" | "headShake" | "swing" | "tada" | "wobble" | "jello" | "heartBeat" | "backInDown" | "backInLeft" | "backInRight" | "backInUp" | "backOutDown" | "backOutLeft" | "backOutRight" | "backOutUp" | "bounceIn" | "bounceInDown" | "bounceInLeft" | "bounceInRight" | "bounceInUp" | "bounceOut" | "bounceOutDown" | "bounceOutLeft" | "bounceOutRight" | "bounceOutUp" | "fadeIn" | "fadeInDown" | "fadeInDownBig" | "fadeInLeft" | "fadeInLeftBig" | "fadeInRight" | "fadeInRightBig" | "fadeInUp" | "fadeInUpBig" | "fadeInTopLeft" | "fadeInTopRight" | "fadeInBottomLeft" | "fadeInBottomRight" | "fadeOut" | "fadeOutDown" | "fadeOutDownBig" | "fadeOutLeft" | "fadeOutLeftBig" | "fadeOutRight" | "fadeOutRightBig" | "fadeOutUp" | "fadeOutUpBig" | "fadeOutTopLeft" | "fadeOutTopRight" | "fadeOutBottomRight" | "fadeOutBottomLeft" | "flip" | "flipInX" | "flipInY" | "flipOutX" | "flipOutY" | "lightSpeedInRight" | "lightSpeedInLeft" | "lightSpeedOutRight" | "lightSpeedOutLeft" | "rotateIn" | "rotateInDownLeft" | "rotateInDownRight" | "rotateInUpLeft" | "rotateInUpRight" | "rotateOut" | "rotateOutDownLeft" | "rotateOutDownRight" | "rotateOutUpLeft" | "rotateOutUpRight" | "hinge" | "jackInTheBox" | "rollIn" | "rollOut" | "zoomIn" | "zoomInDown" | "zoomInLeft" | "zoomInRight" | "zoomInUp" | "zoomOut" | "zoomOutDown" | "zoomOutLeft" | "zoomOutRight" | "zoomOutUp" | "slideInDown" | "slideInLeft" | "slideInRight" | "slideInUp" | "slideOutDown" | "slideOutLeft" | "slideOutRight" | "slideOutUp" | {};

declare function AnimationContextProvider$1({ children, }: {
    children: ReactNode;
}): JSX.Element;
declare function Animation$1({ id, animateIn, children, }: {
    id?: string;
    animateIn?: Omit<AnimateProps, "id">;
    children: ReactNode;
}): JSX.Element;

declare const Animation: typeof Animation$1;
declare const animate: ({ id, name, duration, repeat, direction, timing, removeAfter, }: AnimateProps) => void;
declare const AnimationContextProvider: typeof AnimationContextProvider$1;

export { Animation, AnimationContextProvider, animate };
//# sourceMappingURL=index.d.ts.map
