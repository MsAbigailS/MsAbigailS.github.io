// randomizing shape location on screen
export const randomPosition = () => {
    return {
        top: `${Math.floor(Math.random() * window.innerHeight)}px`,
        left: `${Math.floor(Math.random() * window.innerWidth)}px`
    }
}

export const randomPositionWithOffset = (offset: number = 0) => {
    return {
        top: `${Math.floor(Math.random() * (window.innerHeight - offset)) + offset}px`,
        left: `${Math.floor(Math.random() * (window.innerWidth - offset)) + offset}px`
    }
}

// ensuring equal distribution of shapes in all four quads
export const randomEvenDistributedPositions = (maxElements: number, maxWidth: number, maxHeight: number) => {
    let results: { top: number; left: number }[] = [];
    let quads: { [key: string]: number } = {};
    let maxPerQuad = Math.floor(maxElements / 4);
    let floaters = maxElements % 4;
    quads['top-left'] = 0;
    quads['top-right'] = 0;
    quads['bottom-left'] = 0;
    quads['bottom-right'] = 0;

    for (let quad of Object.keys(quads)) {

        while (quads[quad] < maxPerQuad) {
            results.push({
                top: Math.floor(Math.random() * (maxHeight / 2)) + (quad.includes('top') ? 0 : maxHeight / 2),
                left: Math.floor(Math.random() * (maxWidth / 2)) + (quad.includes('left') ? 0 : maxWidth / 2)
            })
            quads[quad]++;
        }
    }

    while (floaters > 0) {
        const quad = Object.keys(quads)[Math.floor(Math.random() * 4)];
        results.push({
            top: Math.floor(Math.random() * (maxHeight / 2)) + (quad.includes('top') ? 0 : maxHeight / 2),
            left: Math.floor(Math.random() * (maxWidth / 2)) + (quad.includes('left') ? 0 : maxWidth / 2)
        });
        quads[quad]++;
        floaters--;
    }

    return results;
}
