import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import 'animate.css';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var AnimationContext = createContext({});
var useAnimation = function () {
    var animate = useContext(AnimationContext).animate;
    return { animate: animate, Animation: Animation$1 };
};
var useAnimationContext = function () {
    return __assign(__assign({}, useContext(AnimationContext)), { Animation: Animation$1 });
};
function AnimationContextProvider$1(_a) {
    var children = _a.children;
    var _b = useState({}), animations = _b[0], setAnimations = _b[1];
    function putAnimation(id, params) {
        setAnimations(function (old) {
            var _a;
            return __assign(__assign({}, old), (_a = {}, _a[id] = __assign(__assign({}, old[id]), params), _a));
        });
    }
    function animate(_a) {
        var id = _a.id, name = _a.name, _b = _a.duration, duration = _b === void 0 ? 1000 : _b, _c = _a.repeat, repeat = _c === void 0 ? 1 : _c, _d = _a.direction, direction = _d === void 0 ? "normal" : _d, _e = _a.timing, timing = _e === void 0 ? "linear" : _e, _f = _a.removeAfter, removeAfter = _f === void 0 ? false : _f;
        var animation = animations[id];
        var element = animation === null || animation === void 0 ? void 0 : animation.element;
        if (!element)
            return;
        if (direction.includes("alternate")) {
            repeat *= 2;
            duration /= 2;
        }
        var _duration = (duration / 1000).toFixed(3).toString() + "s";
        if (!animation.isAnimating) {
            putAnimation(id, { isAnimating: true, isRemoved: false });
            element.style.animationName = name;
            element.style.animationDuration = _duration;
            element.style.animationIterationCount = repeat.toString();
            element.style.animationDirection = direction;
            element.style.animationTimingFunction = timing;
            setTimeout(function () {
                element.style.animationName = "";
                if (removeAfter) {
                    putAnimation(id, { isRemoved: true });
                    element.classList.add("removed");
                }
                putAnimation(id, { isAnimating: false });
            }, duration * repeat);
        }
    }
    var states = { animations: animations, putAnimation: putAnimation, animate: animate };
    return (React.createElement(AnimationContext.Provider, { value: states }, children));
}
function Animation$1(_a) {
    var _b;
    var id = _a.id, animateIn = _a.animateIn, children = _a.children;
    if (animateIn === undefined) {
        animateIn = { name: "fadeIn", duration: 1000 };
    }
    if (animateIn.duration === undefined) {
        animateIn.duration = 1000;
    }
    animateIn.name = animateIn.name.replace("animate__", "");
    var element = useRef(null);
    var _c = useAnimationContext(), animations = _c.animations, putAnimation = _c.putAnimation;
    useEffect(function () {
        return function () {
            if (id && !animations[id]) {
                putAnimation(id, {
                    isAnimating: true,
                    element: element.current || undefined,
                });
                setTimeout(function () {
                    putAnimation(id, {
                        isAnimating: false,
                    });
                    element.current.style.animationName = "";
                }, animateIn === null || animateIn === void 0 ? void 0 : animateIn.duration);
            }
        };
    }, []);
    return (React.createElement("div", { ref: element, style: {
            animationName: animateIn.name,
            animationDuration: (animateIn.duration / 1000).toFixed(3).toString() + "s",
            display: ((_b = animations[id]) === null || _b === void 0 ? void 0 : _b.isRemoved) === true
                ? "none"
                : "inherit",
            flexDirection: "inherit",
            width: "fit-content",
            height: "fit-content",
        } }, children));
}

var _a;
var Animation = (_a = useAnimation(), _a.Animation), animate = _a.animate;
var AnimationContextProvider = AnimationContextProvider$1;

export { Animation, AnimationContextProvider, animate };
//# sourceMappingURL=index.js.map
