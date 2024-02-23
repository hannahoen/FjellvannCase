import { iModule } from "@/utils/sections";
import Image from "next/image";
import { Video } from "./video";


interface IProps {
    media: iModule;
    alignment: string;
}

export const Media: React.FC<IProps> = ({media, alignment}) => {
    return (
        <div className={`${alignment === "right" ? "lg:order-last" : ""} lg:w-1/2 sm:w-full`}>
            {media._type === "imageModule" ? (
                    <div className={`w-full h-full relative flex justify-content items-center`}>
                        <Image
                            src={media.image ? media.image : ""}
                            alt={media.alt ? media.alt : ""}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded"
                            style={{ width: "100%", objectFit:"cover" }}
                        />
                    </div>
            ) : (
                <div className={`w-full h-full relative flex justify-content items-center`}>
                   {media.video && (<Video video={media.video}/>)}
                </div>
            )}    
        </div>
    );
};