import { TextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const textModule = defineType({
  name: "textModule",
  type: "object",
  title: "Content",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "array",
        of: [{ type: "block" }]
    })
  ],
  icon: TextIcon,
});
