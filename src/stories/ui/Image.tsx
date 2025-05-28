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

    // dynamic import images
    const imageMap = import.meta.glob('../../assets/*.{jpg,png,jpeg}', {
        eager: true,
        import: 'default',
    });

    return (
        <img
            src={imageMap[`../../assets/${image.resource}`] as string}
            alt="demo cover/image"
            className={`w-full h-full ${fit} rounded-sm`}
        />
    );
};
