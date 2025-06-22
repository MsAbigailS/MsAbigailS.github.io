import { useMemo, useState, useRef, useEffect } from 'react';
import type { images } from '../../types/project';

export interface ImageProps {
    image: images;
    fit: 'object-contain' | 'object-cover' | 'object-fill';
};

export const Image = ({
    image,
    fit = 'object-contain'
}: ImageProps) => {

    // removing everything before last /
    image.resource = useMemo(() => {
        // return image.resource.split('/').pop() || '';
        return image.resource
    }, [image.resource]);

    // dynamic import images
    const imageMap = import.meta.glob('../../assets/**/*.{jpg,png,jpeg,gif}', {
        eager: true,
        import: 'default',
    });

    return (
        <img
            src={imageMap[`../../assets/${image.resource}`] as string}
            alt={image.alt || 'Image'}
            className={`w-full h-full max-h-150 max-w-150 ${fit} rounded-md`}
        />
    );
};
