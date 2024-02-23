import { iSection } from "@/utils/sections";
import { PortableText } from '@portabletext/react';
import { Media } from "./media";
import { Content } from "./content";
import { Buttons } from "./buttons";

interface IProps {
    section: iSection;
}

export const Section: React.FC<IProps> = ({section}) => {
    const buttons = (section.modules || []).find((item) => item._type === "buttonsModule"); 
    const media = (section.modules || []).find((item) => item._type === "imageModule" || item._type === "videoModule");
    const content = (section.modules || []).find((item) => item._type === "textModule"); 

    var mediaAlignment = "";
    if(media) {
        mediaAlignment = media.alignment === "right" || null ? "right" : "left"
    };

    return (
        <div key={section._id} className={`bg-case-${section.backgroundColor} rounded p-5 w-auto w-full flex gap-5 lg:flex-row flex-col`}>
            {media && (
                <Media media={media} alignment={mediaAlignment}/>
            )}
            <div className={`flex flex-col gap-4 justify-center ${media ? "lg:w-2/4 sm:w-full" : "w-full"} ${mediaAlignment === "right" ? `lg:items-end lg:text-right sm:items-start sm:text-left` : `items-start text-left`} ${section.backgroundColor === "black" ? "text-case-gray" : "text-zinc-900" }`}>
                <Content 
                    preTitle={section.preTitle}
                    title={section.title}
                    content={content?.content}
                    backgroundColor={section.backgroundColor}
                />
                {buttons?.buttons && (
                    <Buttons 
                        buttons={buttons.buttons}
                        backgroundColor={section.backgroundColor}
                    />
                )}
            </div>
        </div>
    );
};