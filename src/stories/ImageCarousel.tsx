import React from 'react';

export interface ImageCarouselProps {
    /** What images to include */
    images: string[];
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
        if (image) {
            image.src = images[parseInt(target.dataset.key!)];
        }

    }

    return (
        <div id="imageCarousel" className={`flex flex-col justify-center items-center p-1 size-120 `}>
            <div className={`min-h-[75%] min-w-full flex justify-center items-center mb-2`}>
                <img id="image" src={images[0]} alt="carouselImage" className={`rounded-lg object-cover min-h-[100%] max-h-[100%] `} />
            </div>
            {images.length > 1 ?
                <div id="additionalPreview" className={`flex flex-row justify-center items-center *:m-1`}>
                    {images.map((image, index) => {
                        if (index > 3) return null;
                        return (
                            <img key={index} data-key={index} src={image} alt="carouselImage" className={`rounded-lg max-w-[24%] min-w-[24%] min-h-[100%] max-h-[100%] object-cover hover:cursor-pointer hover:opacity-50`} onClick={changeImage} />
                        )
                    })}
                </div> :
                ''
            }
        </div>
    );
};
