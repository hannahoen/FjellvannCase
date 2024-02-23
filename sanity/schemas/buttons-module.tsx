import { ComposeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const buttonsModule = defineType({
  name: "buttonsModule",
  type: "object",
  title: "Buttons",
  fields: [
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        defineArrayMember({
        name: "button",
        title: "Button",
        type: "button",
        })
      ],
      validation: (Rule) => Rule.max(2)
    })
  ],
  icon: ComposeIcon,
});
