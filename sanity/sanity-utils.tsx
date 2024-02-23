import { iSection } from "@/utils/sections";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getSections (): Promise<iSection[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "section"]{
            _id, 
            preTitle,
            title,
            content,
            backgroundColor,
            modules[] {
                _type == "imageModule" => {
                    _type,
                    "image": image.asset->url,
                    alignment,
                      alt
                },
                _type == "videoModule" => {
                    _type,
                    "video": video.asset->url,
                    alignment,
                    alt
                },
                _type == "textModule" => {
                    _type,
                    content
                },
                _type == "buttonsModule" => {
                    _type,
                    buttons[] {
                        title
                    }
                }
                   
            }
        }`
    )
}

export const dynamic = 'force-dynamic'
