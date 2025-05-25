import React from 'react';
import { preview } from 'vite';

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
    const [index, setIndex] = React.useState(0);

    // setting main image to selected image
    function changeImage(e: React.MouseEvent<HTMLElement>) {
        // getting selected element
        const target = e.target as HTMLDivElement;
        const image = document.getElementById("mainImage") as HTMLImageElement;
        const desc = document.getElementById("mainDescription") as HTMLParagraphElement;

        console.log(target);

        // getting image
        const img = imageMap[`../assets/${images[parseInt(target.dataset.key!)].resource}`];

        // updating main window w/ clicked image
        if (image) {
            image.src = img as string;
            image.alt = images[parseInt(target.dataset.key!)].alt;
        }
        if (desc) {
            desc.innerText = images[parseInt(target.dataset.key!)].alt;
        }
    }

    const imageMap = import.meta.glob('../assets/*.{jpg,png,jpeg}', {
        eager: true,
        import: 'default',
    });

    return (
        <div id="imageCarousel" className={`flex flex-col justify-center items-center`}>

            {/* main image */}
            <div id="mainWindow" className={`flex flex-col w-full justify-center items-center`}>
                <div id="mainImageBackground" className={`flex justify-center items-center w-full bg-gray-300 rounded-lg`}>
                    <img id="mainImage" src={imageMap[`../assets/${images[0].resource}`] as string} alt="carouselImage" className={`shadow-lg max-h-100 rounded-md object-contain`} />
                </div>
                <p id="mainDescription" className={`flex justify-center items-center text-md min-w-full overflow-hidden text-gray-800`}>{images[0].alt}</p>
            </div>

            {/* previews */}
            <div id="previewWindow" className={`w-full flex flex-row justify-center`}>
                {images.map((image, index) => {
                    // if (index > 3) return null;
                    const img = imageMap[`../assets/${image.resource}`];
                    if (!img || typeof img !== 'string') return null;
                    return (
                        <div className={`flex flex-row justify-center m-1 items-center rounded-sm *:text-center *:size-[100%] *:hover:opacity-50 *:hover:cursor-pointer *:hover:bg-gray-200`}
                            key={index}

                            onClick={changeImage}
                        >
                            <img data-key={index} src={img} alt='placeholder' />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
