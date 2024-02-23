'use client'

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface IProps {
    video: string;
}

export const Video: React.FC<IProps> = ({video}) => {
    return (
        <>
            <ReactPlayer url={video} muted={true} playing={true} loop={true} className="mx-auto"/>
        </>
    );
};
