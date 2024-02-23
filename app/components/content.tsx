import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from "sanity";

interface IProps {
    preTitle?: string;
    title: string;
    content?: PortableTextBlock[];
    backgroundColor: string;
}

export const Content: React.FC<IProps> = ({preTitle, title, content, backgroundColor}) => {
    const components: PortableTextComponents = {
        listItem: {
            bullet: ({children}) => <li className={`${backgroundColor === "yellow" ? "list-image-[url(/list-dark.png)]" : "list-image-[url(/list-yellow.png)] "} pl-5 list-inside`}>{children}</li>
        },
    };

    return (
        <>
            <div className={`flex flex-col`}>
                {preTitle && (<div className={'uppercase font-semibold text-base'}>{preTitle}</div>)}
                {title && (<div className={'font-bold text-5xl'}>{title}</div>)}
            </div>
            {content && (
                <div className={'text-base leading-7 font-normal'}>
                    <PortableText value={content} components={components}/>
                </div>
            )}
        </>
    );
};
