import { useState, useEffect } from 'react'

// sets visibility of element
export function useVisible(ref: React.RefObject<HTMLElement | null>) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return; // wait for render

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.10 }
        );

        observer.observe(ref.current);

        // check if umount
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref]);

    return visible;
}