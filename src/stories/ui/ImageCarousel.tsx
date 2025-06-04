import React, { useEffect, useRef } from 'react';
import { preview } from 'vite';
import { Image } from '../ui/Image';

export interface ImageCarouselProps {
    /** What images to include */
    images: { resource: string; alt: string }[];
    /** What size to make carousel */
    size?: 'small' | 'large'
}

export const ImageCarousel = ({
    images,
    size = 'large'
}: ImageCarouselProps) => {
    const [currIndex, setCurrentIndex] = React.useState(0);
    const mainWindow = useRef<HTMLDivElement | null>(null);
    const previewWindow = useRef<HTMLDivElement | null>(null);


    // rotates images based on k
    function rotateImages() {
        if (!mainWindow.current) return;

        console.log(mainWindow.current?.children[0]);
    }


    return (
        <div id="imageCarousel" className={`flex flex-col justify-center items-center`}>
            <div
                ref={mainWindow}
                className={`flex flex-col justify-center 
                    items-center ${size === 'large' ? 'w-full' : 'w-1/2'} 
                    *:text-gray-200 *:italic p-2`}
            >
                <div
                    className={`border-2 size-50 md:size-100 lg:size-120 bg-white/90 rounded-md overflow-hidden`}
                >
                    <Image
                        image={images[currIndex]}
                        fit="object-contain"
                    />
                </div>
                <p>{images[currIndex].alt}</p>
            </div>

            <div
                ref={previewWindow}
                className="z-50 hover:cursor-pointer"
            >
                {images.length < 3 ? (
                    <div
                        className="flex flex-row *:m-2 *:rounded-sm *:bg-white/90 *:hover:cursor-pointer *:hover:bg-white"
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex((prev) => index)}
                                className={`size-20 md:size-30 lg:size-50`}
                            >
                                <Image
                                    image={image}
                                    fit="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        className="flex flex-row  *:m-2 *:rounded-sm *:bg-white/90 *:hover:cursor-pointer *:hover:bg-white"
                    >
                        <div
                            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                            className={`size-20 md:size-30 lg:size-50`}

                        >
                            <Image
                                image={images[(currIndex + 1) % images.length]}
                                fit="object-contain"
                            />
                        </div>
                        <div
                            className={`size-20 md:size-30 lg:size-50`}

                            onClick={() => setCurrentIndex((prev) => (prev + 2) % images.length)}
                        >
                            <Image
                                image={images[(currIndex + 2) % images.length]}
                                fit="object-contain"
                            />
                        </div>
                        <div
                            className={`size-20 md:size-30 lg:size-50`}

                            onClick={() => setCurrentIndex((prev) => (prev + 3) % images.length)}
                        >
                            <Image
                                image={images[(currIndex + 3) % images.length]}
                                fit="object-contain"
                            />
                        </div>
                    </div>

                )}
            </div>

            {/* <button className="z-50 hover:cursor-pointer" onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}>click</button> */}
        </div>
    );
};
