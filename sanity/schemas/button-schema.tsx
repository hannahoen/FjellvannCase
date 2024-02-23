import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const button = defineType({
  name: 'button',
  type: 'object',
  title: 'Button',
  fields: [
    defineField({
      name: "title",
      title: "Button title",
      type: "string",
    })
  ],
  icon: DocumentTextIcon,
})