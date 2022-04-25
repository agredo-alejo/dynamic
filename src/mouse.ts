export interface Mouse {
    x: undefined | number
    y: undefined | number
    dragging: boolean
    onMouseDragg: Function
}
export const mouse: Mouse = {
    x: undefined,
    y: undefined,
    dragging: false,
    onMouseDragg: () => { }
};
export const mouseDragged = (callback: Function) => {
    mouse.onMouseDragg = callback
}
const mousemove = (event: MouseEvent) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    if (mouse.dragging) {
        mouse.onMouseDragg();
    }
}
const touchmove = (event: TouchEvent) => {
    mouse.x = event.targetTouches[0].pageX;
    mouse.y = event.targetTouches[0].pageY;
    if (mouse.dragging) {
        mouse.onMouseDragg();
    }
}
const mousedown = (event: MouseEvent) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.dragging = true;
}
const touchstart = (event: TouchEvent) => {
    mouse.x = event.targetTouches[0].pageX;
    mouse.y = event.targetTouches[0].pageY;
    mouse.dragging = true;
}
const stopDragging = () => {
    mouse.dragging = false;
}
export const addMouseListeners = () => {
    addEventListener('mousemove', mousemove);
    addEventListener('touchmove', touchmove);
    addEventListener('mousedown', mousedown);
    addEventListener('touchstart', touchstart);
    addEventListener('mouseup', stopDragging);
    addEventListener('touchend', stopDragging);
}
export const removeMouseListeners = () => {
    removeEventListener('mousemove', mousemove);
    removeEventListener('touchmove', touchmove);
    removeEventListener('mousedown', mousedown);
    removeEventListener('touchstart', touchstart);
    removeEventListener('mouseup', stopDragging);
    removeEventListener('touchend', stopDragging);
}
