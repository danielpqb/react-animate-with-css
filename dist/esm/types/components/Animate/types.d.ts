/** @internal */
export type AnimationStates = {
    animations: {
        [id: string]: Animations;
    };
    putAnimation: (id: string, params: Animations) => void;
    animate: Animate;
};
export type Animations = {
    element?: HTMLElement;
    isAnimating?: boolean;
    isRemoved?: boolean;
};
type Animate = ({ id, name, duration, repeat, direction, timing, removeAfter, }: AnimateProps) => void;
export type AnimateProps = {
    id: string;
    name: AnimationNames;
    duration?: number;
    repeat?: number;
    direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
    timing?: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | (string & {});
    removeAfter?: boolean;
};
export type AnimationNames = "bounce" | "flash" | "pulse" | "rubberBand" | "shakeX" | "shakeY" | "headShake" | "swing" | "tada" | "wobble" | "jello" | "heartBeat" | "backInDown" | "backInLeft" | "backInRight" | "backInUp" | "backOutDown" | "backOutLeft" | "backOutRight" | "backOutUp" | "bounceIn" | "bounceInDown" | "bounceInLeft" | "bounceInRight" | "bounceInUp" | "bounceOut" | "bounceOutDown" | "bounceOutLeft" | "bounceOutRight" | "bounceOutUp" | "fadeIn" | "fadeInDown" | "fadeInDownBig" | "fadeInLeft" | "fadeInLeftBig" | "fadeInRight" | "fadeInRightBig" | "fadeInUp" | "fadeInUpBig" | "fadeInTopLeft" | "fadeInTopRight" | "fadeInBottomLeft" | "fadeInBottomRight" | "fadeOut" | "fadeOutDown" | "fadeOutDownBig" | "fadeOutLeft" | "fadeOutLeftBig" | "fadeOutRight" | "fadeOutRightBig" | "fadeOutUp" | "fadeOutUpBig" | "fadeOutTopLeft" | "fadeOutTopRight" | "fadeOutBottomRight" | "fadeOutBottomLeft" | "flip" | "flipInX" | "flipInY" | "flipOutX" | "flipOutY" | "lightSpeedInRight" | "lightSpeedInLeft" | "lightSpeedOutRight" | "lightSpeedOutLeft" | "rotateIn" | "rotateInDownLeft" | "rotateInDownRight" | "rotateInUpLeft" | "rotateInUpRight" | "rotateOut" | "rotateOutDownLeft" | "rotateOutDownRight" | "rotateOutUpLeft" | "rotateOutUpRight" | "hinge" | "jackInTheBox" | "rollIn" | "rollOut" | "zoomIn" | "zoomInDown" | "zoomInLeft" | "zoomInRight" | "zoomInUp" | "zoomOut" | "zoomOutDown" | "zoomOutLeft" | "zoomOutRight" | "zoomOutUp" | "slideInDown" | "slideInLeft" | "slideInRight" | "slideInUp" | "slideOutDown" | "slideOutLeft" | "slideOutRight" | "slideOutUp" | {};
export {};
//# sourceMappingURL=types.d.ts.map