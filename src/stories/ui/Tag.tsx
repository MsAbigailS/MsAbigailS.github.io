import { useMemo } from 'react';
export interface TagProps {
    /** What the label is */
    label?: string;
    /** What color theme to use */
    theme?: 'white' | 'blue' | 'green' | 'orange' | 'pink';
    /** What size to use */
    size?: 'small' | 'medium' | 'large';
}

export const Tag = ({
    label = 'Tag',
    theme,
    size = 'medium'
}: TagProps) => {
    const colors = ['blue', 'green', 'orange', 'pink']
    const bgColor = useMemo(() => {
        if (theme === undefined) {
            return getComputedStyle(document.documentElement).getPropertyValue('--color-' + colors[Math.floor(Math.random() * colors.length)]).replace(/"/g, '')
        } else {
            return getComputedStyle(document.documentElement).getPropertyValue('--color-' + theme).replace(/"/g, '')
        }
    }, [])

    const txtColor = useMemo(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-black').replace(/"/g, '')
    }, [])

    return (
        <div className={`${size === 'medium' ? 'text-md' : size === 'small' ? 'text-sm' : 'text-lg'}
            shadow-sm rounded-lg pl-2 pr-2 pb-1 pt-1 ml-2 mr-2 w-auto h-auto`} style={{ backgroundColor: bgColor, color: txtColor }}>
            {label}
        </div>
    );
};
