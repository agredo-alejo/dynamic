let logFpsInterval = 0;
let framesPerSecond = 0;
let animationFrame = 0;
let then = 0;
let internFps = 300

export interface Animation {
    animate: (callback: Function) => any;
    callback: Function
}

export const animation: Animation = {
    callback: () => { },
    animate: (callback: Function) => {
        animation.callback = callback;
    },
}

export const startAnimation = () => {
    animationFrame = requestAnimationFrame(startAnimation);

    let now = Date.now();
    let elapsed = now - then;
    let fpsInterval = 1000 / internFps;

    if (elapsed > fpsInterval) {
        framesPerSecond++;

        then = now - (elapsed % fpsInterval);

        animation.callback()
    }
}

export const showFps = () => {
    logFpsInterval = setInterval(() => {
        console.log(framesPerSecond);
        framesPerSecond = 0;
    }, 1000);
}
export const hideFps = () => {
    clearInterval(logFpsInterval);
}
export const stopAnimation = () => {
    cancelAnimationFrame(animationFrame);
}

export const setFps = (fps: number) => {
    internFps = Math.max(Math.min(300, fps), 0)
}