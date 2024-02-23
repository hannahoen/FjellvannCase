import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const imageModule = defineType({
  name: 'imageModule',
  type: 'object',
  title: 'Image',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
        name: 'alignment',
        title: 'Media alignment',
        description: "Default: left",
        type: 'string',
        options: {
          list: [
              {title: 'Left', value: 'left'},
              {title: 'Right', value: 'right'},
          ],
      },
    })
  ],
  icon: ImageIcon,
})