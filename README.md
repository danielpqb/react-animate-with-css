# react-animate-with-css

React library to animate elements using [Animate.css](https://animate.style/) or your own CSS animation.

[Github repository](https://github.com/danielpqb/react-animate-with-css#readme)

## How to use

#### Install

`npm i react-animate-with-css`

#### Wrap your App with AnimationContextProvider

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AnimationContextProvider } from "react-animate-with-css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AnimationContextProvider>
        <App />
    </AnimationContextProvider>
  </React.StrictMode>
);
```

#### Animate when component is first rendering

```
import { Animation } from "react-animate-with-css";

export default function App() {
    return (
        <div>
            <Animation animateIn={{ name: "backInLeft" }}>
                <img src="/logo.svg" alt="" />
            </Animation>
        </div>
    );
}
```

**Important:**

* You can't animate the position of components that has a position CSS property **fixed** or **absolute**, unless you create your own CSS animation that supports it.
* I strongly recommend you to always use **display flex**, it will be much easier to make your CSS to work properly.
* Keep in mind that the Animation component will try to mimic its parent inheriting the following CSS properties: **width**, **height**, **display**, **justify-content and** **align-items**.
* You can always change this properties passing a style like this: `<Animation style={{ width: "40px", justifyContent: "flex-end" }}></Animation>`

#### Animate using ID

```
import { Animation, useAnimate } from "react-animate-with-css";

export default function App() {
    const { animate } = useAnimate();

    return (
        <div>
            <Animation id="logo-icon">
                <img
                    src="/logo.svg"
                    alt=""
                    onClick={() => {
                        animate({
                            id: "logo-icon",
                            name: "tada",
                        });
                    }}
                />
            </Animation>

            <button
                onClick={() => {
                    animate({
                        id: "logo-icon",
                        name: "backInLeft",
                        duration: 1500,
                        direction: "reverse",
                        removeAfter: true,
                    });
                }}
            >
            </button>
        </div>
    );
}
```

## Properties

### *animate()*

Type: `function`

A function that allows you to animate any Animation element using its ID.

This is a global function, so it can be called at any line of your code.

#### `[ id ]`

Type: `string`

#### `[ name ]`

Type: `string`

Check [Animate.css](https://animate.style/) for demonstrations.

|                                                                                                            - Attention seekers -                                                                                                            |                                                                                  -        Back        -                                                                                  |                                                                                                                -      Bouncings      -                                                                                                                |                                                                                                                           -         Rotating         -                                                                                                                           |                                                                                                                                                    -        Fading In        -                                                                                                                                                    |                                                                                                                                                          -        Fading Out        -                                                                                                                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `"bounce"` <br /> `"flash"` <br /> `"pulse"` <br /> `"rubberBand"` <br /> `"shakeX"` <br /> `"shakeY"` <br /> `"headShake"` <br /> `"swing"` <br /> `"tada"` <br /> `"wobble"` <br /> `"jello"` <br /> `"heartBeat"` | `"backInDown"` <br /> `"backInLeft"` <br /> `"backInRight"` <br /> `"backInUp"` <br /><br /> `"backOutDown"` <br /> `"backOutLeft"` <br /> `"backOutRight"` <br /> `"backOutUp"` | `"bounceIn"` <br /> `"bounceInDown"` <br /> `"bounceInLeft"` <br /> `"bounceInRight"` <br /> `"bounceInUp"` <br /><br /> `"bounceOut"` <br /> `"bounceOutDown"` <br /> `"bounceOutLeft"` <br /> `"bounceOutRight"` <br /> `"bounceOutUp"` | `"rotateIn"` <br /> `"rotateInDownLeft"` <br /> `"rotateInDownRight"` <br /> `"rotateInUpLeft"` <br /> `"rotateInUpRight"` <br /><br /> `"rotateOut"` <br /> `"rotateOutDownLeft"` <br /> `"rotateOutDownRight"` <br /> `"rotateOutUpLeft"` <br /> `"rotateOutUpRight"` | `"fadeIn"` <br /> `"fadeInDown"` <br /> `"fadeInDownBig"` <br /> `"fadeInLeft"` <br /> `"fadeInLeftBig"` <br /> `"fadeInRight"` <br /> `"fadeInRightBig"` <br /> `"fadeInUp"` <br /> `"fadeInUpBig"` <br /> `"fadeInTopLeft"` <br /> `"fadeInTopRight"` <br /> `"fadeInBottomLeft"` <br /> `"fadeInBottomRight"` | `"fadeOut"` <br /> `"fadeOutDown"` <br /> `"fadeOutDownBig"` <br /> `"fadeOutLeft"` <br /> `"fadeOutLeftBig"` <br /> `"fadeOutRight"` <br /> `"fadeOutRightBig"` <br /> `"fadeOutUp"` <br /> `"fadeOutUpBig"` <br /> `"fadeOutTopLeft"` <br /> `"fadeOutTopRight"` <br /> `"fadeOutBottomRight"` <br /> `"fadeOutBottomLeft"` |

|                                          - Flippers -                                          |                                             -     Lightspeed     -                                             |                              -   Specials   -                              |                                            - Zooming entrances -                                            |                                                - Zooming exits -                                                |                                    - Sliding entrances -                                    |                                        - Sliding exits -                                        |
| :----------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: |
| `"flip"` <br /> `"flipInX"` <br /> `"flipInY"` <br /> `"flipOutX"` <br /> `"flipOutY"` | `"lightSpeedInRight"` <br /> `"lightSpeedInLeft"` <br /> `"lightSpeedOutRight"` <br /> `"lightSpeedOutLeft"` | `"hinge"` <br /> `"jackInTheBox"` <br /> `"rollIn"` <br /> `"rollOut"` | `"zoomIn"` <br /> `"zoomInDown"` <br /> `"zoomInLeft"` <br /> `"zoomInRight"` <br /> `"zoomInUp"` | `"zoomOut"` <br /> `"zoomOutDown"` <br /> `"zoomOutLeft"` <br /> `"zoomOutRight"` <br /> `"zoomOutUp"` | `"slideInDown"` <br /> `"slideInLeft"` <br /> `"slideInRight"` <br /> `"slideInUp"` | `"slideOutDown"` <br /> `"slideOutLeft"` <br /> `"slideOutRight"` <br /> `"slideOutUp"` |

#### `[ duration? ]`

Type: `number`

#### `[ delay? ]`

Type: `number`

#### `[ repeat? ]`

Type: `number`

#### `[ direction? ]`

Type: `"normal" | "reverse" | "alternate" | "alternate-reverse"`

#### `[ timing? ]`

Type: ` string | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end"`

#### `[ removeAfter? ]`

Type: `boolean`

### *animations*

Type: `object`

An object that contains all Animation elements and their current state props.

Example:

```
{
  icon: { element: <img src="./logo" alt="" />, isAnimating: false, isRemoved: false },
  headerTxt: { element: <p>Title</p>, isAnimating: true, isRemoved: false },
}
```
