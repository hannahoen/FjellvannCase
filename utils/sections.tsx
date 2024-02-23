import { PortableTextBlock } from "sanity";

export type iSection = {
    _id: string;
    preTitle: string;
    title: string;
    backgroundColor: string;
    modules: iModule[];
};

export type iModule = {
    _type: string;
    
    //text
    content: PortableTextBlock[];

    //media
    image?: string;
    video?: string;
    alignment?: string;
    alt?: string;

    //buttonsModule
    buttons?: iButton[];
};

export type iButton = {
    title: string;
};
