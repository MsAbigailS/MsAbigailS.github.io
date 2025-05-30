import type { BuildLog } from "../../types/buildlog";
import { Image } from "../ui/Image"
import { GlassCard } from "../cards/GlassCard";

export interface BuildLogCardProps {
    buildItem: BuildLog;
}

export const BuildLogCard = (
    {
        buildItem
    }: BuildLogCardProps) => {
    return (
        <div
            data-id="buildlog-card"
            className={`rounded-lg font-assistant *:mt-6 *:mb-6`}
        >

            {/* each update/buildlog item */}
            {buildItem.updates.map((update, index) => (
                <div
                    key={index}
                    className={`hover:ring-1 rounded-lg`}
                >
                    <GlassCard>
                        <div

                            className={`mb-2 flex flex-col`}
                        >
                            <h3
                                className="text-2xl font-semibold"
                            >
                                {update.type}
                            </h3>

                            <p
                                className={`mb-2 mt-2 italic text-sm opacity-90`}
                            >
                                {buildItem.date}
                            </p>

                            <p
                                className="text-sm"
                            >
                                ({update.description})
                            </p>
                        </div>

                        {update.personalNotes && (
                            <div>
                                {update.personalNotes}
                            </div>
                        )}

                        <div>
                            {update.images.map((image, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    className={`m-6`}
                                >
                                    <Image
                                        image={image}
                                        fit='object-cover'
                                    />
                                    <p
                                        className={`text-center italic text-sm mt-2`}
                                    >
                                        {image.alt}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </GlassCard>
                </div>
            ))}
        </div>
    );
};
