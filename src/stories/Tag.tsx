export interface TagProps {
    /** What the label is */
    label?: string;
    /** What color theme to use */
    theme?: 'white' | 'blue' | 'green' | 'orange' | 'pink';
}

export const Tag = ({
    label = 'Tag',
    theme
}: TagProps) => {
    const colors = ['blue', 'green', 'orange', 'pink']
    let bgColor = 'white'
    let txtColor = getComputedStyle(document.documentElement).getPropertyValue('--color-black').replace(/"/g, '')
    if (theme === undefined) {
        bgColor = colors[Math.floor(Math.random() * colors.length)]
        bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-' + bgColor).replace(/"/g, '')
    } else {
        bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-' + theme).replace(/"/g, '')
    }
    return (
        <div className={`shadow-sm rounded-lg pl-2 pr-2 pb-1 pt-1 ml-2 mr-2 w-auto h-auto`} style={{ backgroundColor: bgColor, color: txtColor }}>
            {label}
        </div>
    );
};
