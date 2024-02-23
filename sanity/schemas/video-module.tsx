import {DocumentVideoIcon} from "@sanity/icons";
import {defineField, defineType} from "sanity";

export const videoModule = defineType({
  name: "videoModule",
  type: "object",
  fields: [
    defineField({
      name: "video",
      type: "file",
      title: "Video file",
      options: {
        accept: "video/*"
      }
    }),
    defineField({
      name: "alt",
      title: "Alternative",
      type: "string",
    }),
    defineField({
      name: "alignment",
      title: "Media alignment",
      description: "Default: left",
      type: "string",
      options: {
        list: [
            {title: "Left", value: "left"},
            {title: "Right", value: "right"},
        ],
      },
    }),
  ],
  icon: DocumentVideoIcon,
});
