import { Vector } from "@apjs/vector"
const Tau = Math.PI * 2

export const rgbaColor = (color: number[] | number, green = 0, blue = 0, alpha = 1) => {
    if (color instanceof Array) {
        return `rgba( ${color[0]}, ${color[1]}, ${color[2]}, ${color[3] || 1})`
    }
    return `rgba( ${color}, ${green}, ${blue}, ${alpha})`
}

export const grayScaleColor = (amount: number[] | number, alpha = 1) => {
    if (amount instanceof Array) {
        return `rgba( ${amount[0]}, ${amount[0]}, ${amount[0]}, ${amount[1] || 1})`
    }
    return `rgba( ${amount}, ${amount}, ${amount}, ${alpha})`
}

export const hslaColor = (hue: number[] | number, saturation = 100, lightness = 100, alpha = 50) => {
    if (hue instanceof Array) {
        return `hsla(${hue[0]}, ${hue[1]}%, ${hue[2]}%, ${hue[3] || 1})`
    }
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
}



export function fill(ctx: CanvasRenderingContext2D, color?: string) {
    if (!color) {
        ctx.fill()
        return
    }
    ctx.save()
    ctx.fillStyle = color
    ctx.fill()
    ctx.restore()
    return
}
export function stroke(ctx: CanvasRenderingContext2D, color?: string) {
    if (!color) {
        ctx.stroke()
        return
    }
    ctx.save()
    ctx.strokeStyle = color
    ctx.stroke()
    ctx.restore()
    return
}
export const clearCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
export const scale = (ctx: CanvasRenderingContext2D, scaleX: number, scaleY?: number) => {
    if (scaleY === undefined) {
        ctx.scale(scaleX, scaleX)
    } else {
        ctx.scale(scaleX, scaleY)
    }
}

export const moveTo = (ctx: CanvasRenderingContext2D, x: Vector | number, y = 0) => {
    if (x instanceof Vector) {
        ctx.moveTo(x.x, x.y)
        return
    }
    ctx.moveTo(x, y)
}

export const scaleCanvas = (ctx: CanvasRenderingContext2D, scale: Vector) => {
    ctx.scale(scale.x, scale.y)
}

export const translateCanvas = (ctx: CanvasRenderingContext2D, translate: Vector) => {
    ctx.translate(translate.x, translate.y)
}

export const background = (ctx: CanvasRenderingContext2D, color?: string) => {
    if (!color) {
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        return
    }
    ctx.save()
    ctx.fillStyle = color
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.restore()
}
/**
 * A set of two context2D methods, first the ctx.beginPath method is called and then ctx.arc.
 * 
 * If position is an instance of Vector, the rest of the parameters and their default values will be shifted by one position, so positionY will be @param radius, radius will be @param startAngle, and so on.
 * @param ctx CanvasRenderingContext2D
 * @param position Vector | Number
 * @param positionY Number
 * @param radius Number, by default will be ctx.lineWidth
 * @param startAngle Number, by default will be 0
 * @param endAngle Number, by default will be Math.PI * 2
 * @param counterlockwise Boolean
 */
export const circle = (
    ctx: CanvasRenderingContext2D,
    position: Vector | number,
    positionY: number,
    radius?: number,
    startAngle?: number,
    endAngle?: number | boolean,
    anticlockwise?: boolean) => {

    ctx.beginPath()

    if (position instanceof Vector) {
        ctx.arc(
            position.x,
            position.y,
            positionY || ctx.lineWidth,
            radius || 0,
            startAngle || Tau,
            endAngle as boolean)

        return
    }
    ctx.arc(
        position,
        positionY,
        radius || ctx.lineWidth,
        startAngle || 0,
        endAngle as number || Tau,
        anticlockwise
    )

}

/**
 * If position is an instance of Vector, the rest of the parameters and their default values will be shifted by one position, so positionY will be @param width, width will be @param height
 * @param ctx CanvasRenderingContext2D
 * @param position Vector | Number
 * @param positionY Number
 * @param width Number, by default will be equal to 10
 * @param height Number, if undefined will be equal to width
 */
export const rect = (
    ctx: CanvasRenderingContext2D,
    position: Vector | number,
    positionY: number,
    width: number = 10,
    height?: number
) => {
    if (position instanceof Vector) {
        ctx.rect(position.x, position.y, positionY, width || positionY)
        return
    }
    ctx.rect(position, positionY, width, height || width)
}

export const triangleVector = (ctx: CanvasRenderingContext2D, point1: Vector, point2: Vector, point3: Vector) => {
    ctx.beginPath()
    ctx.moveTo(point1.x, point1.y)
    ctx.lineTo(point2.x, point2.y)
    ctx.lineTo(point3.x, point3.y)
    ctx.closePath()
}
export const trainglePolar = (ctx: CanvasRenderingContext2D, point1: number[], point2: number[], point3: number[]) => {
    ctx.beginPath()
    ctx.moveTo(point1[0] * Math.cos(point1[1]), point1[0] * Math.sin(point1[1]))
    ctx.lineTo(point2[0] * Math.cos(point2[1]), point2[0] * Math.sin(point2[1]))
    ctx.lineTo(point3[0] * Math.cos(point3[1]), point3[0] * Math.sin(point3[1]))
    ctx.closePath()
}
export const triangleCoords = (ctx: CanvasRenderingContext2D, p1x: number, p1y: number, p2x: number, p2y: number, p3x: number, p3y: number) => {
    ctx.beginPath()
    ctx.moveTo(p1x, p1y)
    ctx.lineTo(p2x, p2y)
    ctx.lineTo(p3x, p3y)
    ctx.closePath()
}