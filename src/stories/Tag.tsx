export interface TagProps {
    /** What the label is */
    label?: string;
    /** What color theme to use */
    theme?: 'white' | 'blue' | 'green' | 'orange' | 'pink';
}

export const Tag = ({
    label = 'Tag',
    theme = 'white'
}: TagProps) => {
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-' + theme).replace(/"/g, '')
    const txtColor = getComputedStyle(document.documentElement).getPropertyValue('--color-black').replace(/"/g, '')

    return (
        <div className={`shadow-sm rounded-lg pl-2 pr-2 pb-1 ml-2 mr-2`} style={{ backgroundColor: bgColor, color: txtColor }}>
            {label}
        </div>
    );
};
