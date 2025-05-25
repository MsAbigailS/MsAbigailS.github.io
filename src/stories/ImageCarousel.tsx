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

    // changing image
    function changeImage(e: React.MouseEvent<HTMLElement>) {
        const target = e.target as HTMLDivElement;
        setIndex(parseInt(target.dataset.key!));

        const image = document.getElementById("mainImage") as HTMLImageElement;
        const desc = document.getElementById("mainDescription") as HTMLParagraphElement;
        const img = imageMap[`../assets/${images[parseInt(target.dataset.key!)].resource}`];

        // updating main window w/ clicked image
        if (image) {
            image.src = img as string;
            image.alt = images[parseInt(target.dataset.key!)].alt;
        }
        if (desc) {
            desc.innerText = images[parseInt(target.dataset.key!)].alt;
        }

        // chaning visibility for preview images
        console.log("selected:", target.dataset.key);
        const previewWindow = document.getElementById("previewWindow") as HTMLDivElement
        const previewImages = previewWindow.querySelectorAll("#previewImg");
        const totalImages = previewImages.length
        let currentIndex = parseInt(target.dataset.key!);
        console.log("totalImages:", totalImages);

        for (let i = 0; i < 4; i++) {
            if (currentIndex >= totalImages) {
                currentIndex = 0;
            }
            console.log("currentIndex:", currentIndex);
            previewImages[currentIndex].classList.remove("hidden");
            (previewImages[currentIndex] as HTMLImageElement).src = imageMap[`../assets/${images[currentIndex].resource}`] as string;
            (previewImages[currentIndex] as HTMLImageElement).alt = images[currentIndex].alt;
            currentIndex++;
        }

    }

    const imageMap = import.meta.glob('../assets/*.{jpg,png,jpeg}', {
        eager: true,
        import: 'default',
    });

    return (
        <div id="imageCarousel" className={`border border-amber-700 flex flex-col justify-center items-center ${size === 'large' ? 'size-120' : 'size-60'}`}>
            <div id="mainWindow" className={`border border-purple-500 min-h-[75%] min-w-full flex flex-col justify-center items-center mb-2`}>
                <div id="mainImageBackground" className={`border flex min-h-[90%] min-w-full justify-center items-center bg-white rounded-lg`}>
                    <img id="mainImage" src={imageMap[`../assets/${images[0].resource}`] as string} alt="carouselImage" className={`shadow-lg rounded-md object-contain min-h-[95%] max-h-[95%] `} />
                </div>
                <p id="mainDescription" className={`border flex justify-center items-center text-md min-h-[10%] max-h-[10%] min-w-full overflow-hidden text-gray-800`}>{images[0].alt}</p>
            </div>
            <div id="previewWindow" className={`border min-w-full min-h-[25%] flex flex-row overflow-hidden`}>
                {images.map((image, index) => {
                    const img = imageMap[`../assets/${image.resource}`];
                    if (!img || typeof img !== 'string') return null;
                    return (
                        <img id="previewImg" key={index} data-key={index} src={img} alt="carouselImage" className={`${index > 3 ? 'hidden' : 'flex'} rounded-lg size-20 border border-dashed object-contain hover:cursor-pointer hover:opacity-50`} onClick={changeImage} />

                    )
                })}

                {/* {images.length > 1 ?
                    <div id="additionalPreview" className={`flex flex-row justify-center items-center min-h-full *:m-1`}>
                        {images.map((image, index) => {
                            if (index > 3) return null;
                            const img = imageMap[`../assets/${image.resource}`];
                            if (!img || typeof img !== 'string') return null;
                            return (
                                <div key={index} className={`min-h-[100%]`}>
                                    <img id="previewImg" data-key={index} src={img} alt="carouselImage" className={`rounded-lg object-cover min-h-25 min-w-25 hover:cursor-pointer hover:opacity-50`} onClick={changeImage} />
                                </div>
                            )
                        })}
                    </div> :
                    ''
                } */}
            </div>
        </div>
    );
};
