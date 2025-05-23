import React from 'react';
import { preview } from 'vite';

export interface ImageCarouselProps {
    /** What images to include */
    images: { resource: string; alt: string }[];
}

export const ImageCarousel = ({
    images

}: ImageCarouselProps) => {
    const [index, setIndex] = React.useState(0);
    const prevSymbol = "<"
    const nextSymbol = ">"

    // changing image
    function changeImage(e: React.MouseEvent<HTMLElement>) {
        const target = e.target as HTMLDivElement;
        setIndex(parseInt(target.dataset.key!));

        const image = document.getElementById("image") as HTMLImageElement;
        const desc = document.getElementById("imgDesc") as HTMLParagraphElement;
        const img = imageMap[`../assets/${images[parseInt(target.dataset.key!)].resource}`];

        if (image) {
            image.src = img as string;
            image.alt = images[parseInt(target.dataset.key!)].alt;
        }
        if (desc) {
            desc.innerText = images[parseInt(target.dataset.key!)].alt;
        }

        // const availableImages = imageMap[`../assets/${image.resource}`]

        const previewWindows = document.querySelectorAll("#previewImg")
        console.log("selected index:", parseInt(target.dataset.key!));

        // first window = main window img
        // (previewWindows[0] as HTMLImageElement).src = img as string;

        // if (parseInt(target.dataset.key!) + 1 > images.length) {
        //     (previewWindows[1] as HTMLImageElement).src = imageMap[`../assets/${images[0].resource}`] as string;
        // } else {
        //     const xt = imageMap[`../assets/${images[parseInt(target.dataset.key!) + 1].resource}`] as string;
        //     (previewWindows[1] as HTMLImageElement).src = xt;
        //     (previewWindows[2] as HTMLImageElement).src = imageMap[`../assets/${images[parseInt(target.dataset.key!) + 2].resource}`] as string;
        //     (previewWindows[3] as HTMLImageElement).src = imageMap[`../assets/${images[parseInt(target.dataset.key!) + 3].resource}`] as string;

        // }



        previewWindows.forEach((img) => {
            console.log("window index:", (img as HTMLImageElement).getAttribute("data-key"));
            // (img as HTMLImageElement).src = imageMap[`../assets/${images[2].resource}`] as string;
        })
    }

    const imageMap = import.meta.glob('../assets/*.{jpg,png,jpeg}', {
        eager: true,
        import: 'default',
    });

    return (
        <div id="imageCarousel" className={`flex flex-col justify-center items-center p-1 size-120`}>
            <div className={`min-h-[75%] min-w-full flex flex-col justify-center items-center mb-2`}>
                <div className={`flex min-h-[90%] min-w-full justify-center items-center bg-white rounded-lg`}>
                    <img id="image" src={imageMap[`../assets/${images[0].resource}`] as string} alt="carouselImage" className={`shadow-lg rounded-md object-contain min-h-[95%] max-h-[95%] `} />
                </div>
                <p id="imgDesc" className={`text-md min-h-[10%] max-h-[10%] overflow-hidden max-h-10 min-w-full text-center text-gray-800`}>{images[0].alt}</p>
            </div>
            <div className={`min-h-[25%]`}>
                {images.length > 1 ?
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
                }
            </div>
        </div>
    );
};
