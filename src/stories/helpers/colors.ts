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

export function rgbaToHex(rgba: string): string {
    const match = rgba.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);

    if (!match) return rgba;

    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    const a = match[4] ? parseFloat(match[4]) : 1;

    // Convert RGB to Hex
    const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();

    return `#${hex}${a < 1 ? Math.round(a * 255).toString(16).padStart(2, '0') : ''}`;
}

export function lighten(rgba: string): string {
    const match = rgba.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);

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

export function darken(rgba: string): string {
    const match = rgba.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);

    if (!match) return rgba;

    let r = parseInt(match[1]);
    let g = parseInt(match[2]);
    let b = parseInt(match[3]);
    let a = match[4] ? parseFloat(match[4]) : 1;

    // darkening the color by decreasing RGB values
    r = Math.min(255, r - 30);
    g = Math.min(255, g - 30);
    b = Math.min(255, b - 30);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function brighten(rgba: string): string {
    const match = rgba.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);

    if (!match) return rgba;
    let r = parseInt(match[1]);
    let g = parseInt(match[2]);
    let b = parseInt(match[3]);
    let a = match[4] ? parseFloat(match[4]) : 1;

    r = Math.min(255, r + 50);
    g = Math.min(255, g + 50);
    b = Math.min(255, b + 50);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function complementaryColor(hex: string): string {
    const rgba = hexToRgba(hex);
    const matches = rgba.match(/\d+/g);
    if (!matches || matches.length < 3) {
        return hex;
    }
    let r = 255 - parseInt(matches[0]);
    let g = 255 - parseInt(matches[1]);
    let b = 255 - parseInt(matches[2]);
    let alpha = matches[3] ? parseFloat(matches[3]) : 1;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}