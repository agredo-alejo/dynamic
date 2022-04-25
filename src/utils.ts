const DegToRad = Math.PI / 180
const RadToDeg = 180 / Math.PI

export const randomRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min
}

export const randomIndex = (array: any[]) => {
    return array[Math.floor(Math.random() * array.length)]
}

export const randomNormal = (mean = 0, sd = 1) => {
    // TODO: change from polar box-muller to ziggurat method
    let rand, rand2, radius
    do {
        rand = Math.random() * 2 - 1
        rand2 = Math.random() * 2 - 1
        radius = rand * rand + rand2 * rand2
    } while (radius >= 1 || radius == 0)
    let stdNorm = rand * Math.sqrt(-2 * Math.log(radius) / radius)
    return sd * stdNorm + mean
}

/**
 * 
 * @param angle Angle in degrees
 */
export const radians = (angle: number) => angle * DegToRad

/**
 * 
 * @param angle Angle in radians
 */
export const degrees = (angle: number) => angle * RadToDeg



export const normalize = (number: number, start: number, end: number) => {
    return (number - start) / (end - start)
}

export const map = (number: number, start1: number, end1: number, start2: number, end2: number) => {
    return (number - start1) / (end1 - start1) * (end2 - start2) + start2
}

export const constrain = (num: number, min: number, max: number) => Math.max(Math.min(num, max), min)

/**
 * lerp stands for linear interpolation and gives you a number that is a fraction of the way along a line between the start and end number. The fraction is supplied as the alpha parameter
 */
export const lerp = (start: number, end: number, alpha: number) => {
    return (end - start) * alpha + start
}

/**
 * lerp stands for linear interpolation and gives you a color that is a fraction of the way along a gradient between the start and end color. The fraction is supplied as the alpha parameter
 * 
 * @param color1 RGBA format
 * @param color2 RGBA format
 * @param alpha Number
 */
export const lerpColor = (color1: number[], color2: number[], alpha: number) => {
    return [
        (color2[0] - color1[0]) * alpha + color1[0],
        (color2[1] - color1[1]) * alpha + color1[1],
        (color2[2] - color1[2]) * alpha + color1[2],
        (color2[3] - color1[3]) * alpha + color1[3]
    ]
}
