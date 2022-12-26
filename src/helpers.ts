const min = 50;
const max = 250;


export type BoxProperties = {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
}

export function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


export function overlaps(rect1: BoxProperties, rect2: BoxProperties) {
    return !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom)
}

export function getCoordinates({width, height}: Pick<BoxProperties, 'width' | 'height'>) {
    const left = randomNumber(0, 1000 - width);
    const top = randomNumber(0, 1000 - height);

    return {
        left,
        top
    }
}

export function getBoxDimensions() {
    const bWidth = randomNumber(min, max);
    const bHeight = randomNumber(min, max);

    return {
        width: bWidth,
        height: bHeight,
    }
}

export function getBox(width: number, height: number) {
    const {top, left} = getCoordinates({width, height});

    return {
        width,
        height,
        top,
        left,
        bottom: top + height,
        right: left + width
    }

}
