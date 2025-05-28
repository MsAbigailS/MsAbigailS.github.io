export function hexToRgba(hex: string, alpha: number = 1): string {

    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }

    const num = parseInt(hex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function lighten(rgba: string): string {
    const match = rgba.match(/rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/);
    if (!match) return rgba;

    let r = parseInt(match[1]);
    let g = parseInt(match[2]);
    let b = parseInt(match[3]);
    let a = match[4] ? parseFloat(match[4]) : 1;

    // Lighten the color by increasing RGB values
    r = Math.min(255, r + 30);
    g = Math.min(255, g + 30);
    b = Math.min(255, b + 30);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}