import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bio',
  title: 'Biografía',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Encabezado',
      type: 'string',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Párrafos',
      type: 'array',
      of: [{type: 'text'}],
    }),
  ],
})