import { defineField } from "sanity";

type module = {
    _type: string,
    _key: string
}

const section = {
    name: "section",
    title: "Sections",
    type: "document",
    fields: [
        {
            name: "preTitle",
            title: "Pre title",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule:any) => Rule.required()
        },
        defineField({
            name: 'modules',
            type: 'array',
            title: 'Modules',
            validation: Rule => Rule.custom((modules) => {
                const mods = modules as module[];

                const media = (mods || []).filter((item) => item._type === "imageModule" || item._type === "videoModule")
                const mediaPaths = media.map(
                    (med, index) => [{ _key: med._key }] || [index]
                )
                const buttons = (mods || []).filter(item => item._type === "buttonsModule")

                var excessModules=[];
                if(mediaPaths.length > 1){ excessModules.push("media (only 1 video or image)"); }
                if(buttons.length > 1){ excessModules.push("buttons") }


                return excessModules.length === 0
                    ? true
                    : {
                        message: `There can only be one of each module. 
                            Please remove excess modules: ${excessModules.join(' ,')}
                        `
                    }
              }),
            of: [
                defineField({
                    name: 'textModule',
                    title: 'Content',
                    type: 'textModule',
                }),
                defineField({
                    name: 'videoModule',
                    title: 'Video',
                    type: 'videoModule',
                }),
                defineField({
                    name: 'imageModule',
                    title: 'Image',
                    type: 'imageModule',
                }),
                defineField({
                    name: 'buttonsModule',
                    title: 'Buttons',
                    type: 'buttonsModule',
                }),
            ],
        }),
        {
            title: 'Background color',
            description: 'Default: Gray',
            name: 'backgroundColor',
            type: 'string',
            options: {
                list: [
                    {title: 'Black', value: 'black'},
                    {title: 'White', value: 'white'},
                    {title: 'Yellow', value: 'yellow'},
                    {title: 'Gray', value: 'gray'}
                ],
            },
        },
    ],
    initialValue: {
        backgroundColor: 'gray'
    },
  }
  
  export default section;
  