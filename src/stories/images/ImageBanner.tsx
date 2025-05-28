
import { Image } from '../ui/Image';
import type { images } from '../../types/project';

export interface ImageBannerProps {
    image: images;
    text: string;
}

export const ImageBanner = ({
    image,
    text = 'Default Banner Text'
}: ImageBannerProps) => {
    const dataId = 'image-banner';

    const subheader = `text-lg font-semibold`;

    return (
        <div
            data-id={dataId}
            className={`text-white border-5 max-h-[50px] flex justify-center items-center overflow-hidden max-w-full`}
        >
            <Image image={image} fit='object-contain' />
        </div>
    );
};
