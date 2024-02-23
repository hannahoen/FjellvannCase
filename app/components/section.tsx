import { iSection } from "@/utils/sections";
import { Media } from "./media";
import { Content } from "./content";
import { Buttons } from "./buttons";

interface IProps {
    section: iSection;
};

export const Section: React.FC<IProps> = ({section}) => {
    const buttons = (section.modules || []).find((item) => item._type === "buttonsModule"); 
    const content = (section.modules || []).find((item) => item._type === "textModule"); 
    const media = (section.modules || []).find((item) => item._type === "imageModule" || item._type === "videoModule");

    var mediaAlignment = "";
    if(media) {
        mediaAlignment = media.alignment === "right" || null ? "right" : "left"
    };

    var bg="";
    switch(section.backgroundColor){
        case "black": bg="bg-black"; break;
        case "white": bg="bg-case-white"; break;
        case "yellow": bg="bg-case-yellow"; break;
        default: bg="bg-case-gray"; break;
    }

    return (
        <div key={section._id} className={`${bg} rounded p-5 w-auto w-full max-w-screen-xl flex gap-5 lg:flex-row flex-col min-h-40 lg:min-h-80 justify-content`}>
            {media && (
                <Media media={media} alignment={mediaAlignment}/>
            )}
            <div className={`flex flex-col gap-4 justify-center
                        ${media ? "lg:w-2/4 sm:w-full" : "w-full"} 
                        ${mediaAlignment === "right" ? `lg:items-end lg:text-right sm:items-start sm:text-left` : `items-start text-left`} 
                        ${section.backgroundColor === "black" ? "text-case-gray" : "text-zinc-900" }
                    `}>
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
