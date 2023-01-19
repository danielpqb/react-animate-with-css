/* eslint-disable @typescript-eslint/ban-types */

export type AnimationStates = {
  animations: { [id: string]: Animations };
  putAnimation: (id: string, params: Animations) => void;
  animate: Animate;
};

export type Animations = {
  element?: HTMLElement;
  isAnimating?: boolean;
  isRemoved?: boolean;
};

type Animate = ({
  id,
  name,
  duration,
  delay,
  repeat,
  direction,
  timing,
  removeAfter,
}: AnimateProps) => void;

export type AnimateProps = {
  id: string;
  name: AnimationNames;
  duration?: number;
  delay?: number;
  repeat?: number;
  direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
  timing?:
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "linear"
    | "step-start"
    | "step-end"
    | (string & {});
  removeAfter?: boolean;
};

export type AnimateInProps = {
  name: AnimationNames;
  duration?: number;
  delay?: number;
  repeat?: number;
  direction?: "normal" | "reverse";
  timing?:
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "linear"
    | "step-start"
    | "step-end"
    | (string & {});
  removeAfter?: boolean;
};

export type AnimatePropsGeneric = {
  name?: string;
  duration?: number;
  delay?: number;
  repeat?: number;
  direction?: string;
  timing?: string;
  removeAfter?: boolean;
};

/*
Check website to test animations:
https://animate.style/
*/
export type AnimationNames =
  //Attention seekers
  | "bounce"
  | "flash"
  | "pulse"
  | "rubberBand"
  | "shakeX"
  | "shakeY"
  | "headShake"
  | "swing"
  | "tada"
  | "wobble"
  | "jello"
  | "heartBeat"

  //Back entrances
  | "backInDown"
  | "backInLeft"
  | "backInRight"
  | "backInUp"

  //Back exits
  | "backOutDown"
  | "backOutLeft"
  | "backOutRight"
  | "backOutUp"

  //Bouncings entrances
  | "bounceIn"
  | "bounceInDown"
  | "bounceInLeft"
  | "bounceInRight"
  | "bounceInUp"

  //Bouncings exits
  | "bounceOut"
  | "bounceOutDown"
  | "bounceOutLeft"
  | "bounceOutRight"
  | "bounceOutUp"

  //Fading entrances
  | "fadeIn"
  | "fadeInDown"
  | "fadeInDownBig"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "fadeInUp"
  | "fadeInUpBig"
  | "fadeInTopLeft"
  | "fadeInTopRight"
  | "fadeInBottomLeft"
  | "fadeInBottomRight"

  //Fading exits
  | "fadeOut"
  | "fadeOutDown"
  | "fadeOutDownBig"
  | "fadeOutLeft"
  | "fadeOutLeftBig"
  | "fadeOutRight"
  | "fadeOutRightBig"
  | "fadeOutUp"
  | "fadeOutUpBig"
  | "fadeOutTopLeft"
  | "fadeOutTopRight"
  | "fadeOutBottomRight"
  | "fadeOutBottomLeft"

  //Flippers
  | "flip"
  | "flipInX"
  | "flipInY"
  | "flipOutX"
  | "flipOutY"

  //Lightspeed
  | "lightSpeedInRight"
  | "lightSpeedInLeft"
  | "lightSpeedOutRight"
  | "lightSpeedOutLeft"

  //Rotating entrances
  | "rotateIn"
  | "rotateInDownLeft"
  | "rotateInDownRight"
  | "rotateInUpLeft"
  | "rotateInUpRight"

  //Rotating exits
  | "rotateOut"
  | "rotateOutDownLeft"
  | "rotateOutDownRight"
  | "rotateOutUpLeft"
  | "rotateOutUpRight"

  //Specials
  | "hinge"
  | "jackInTheBox"
  | "rollIn"
  | "rollOut"

  //Zooming entrances
  | "zoomIn"
  | "zoomInDown"
  | "zoomInLeft"
  | "zoomInRight"
  | "zoomInUp"

  //Zooming exits
  | "zoomOut"
  | "zoomOutDown"
  | "zoomOutLeft"
  | "zoomOutRight"
  | "zoomOutUp"

  //Sliding entrances
  | "slideInDown"
  | "slideInLeft"
  | "slideInRight"
  | "slideInUp"

  //Sliding entrances
  | "slideOutDown"
  | "slideOutLeft"
  | "slideOutRight"
  | "slideOutUp"

  //Any other name
  | {};
