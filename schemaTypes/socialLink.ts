import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialLink',
  title: 'Enlaces Sociales',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Plataforma',
      type: 'string',
      options: {
        list: ['GitHub', 'LinkedIn', 'Email', 'Curriculum'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url' ,
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https', 'mailto']
      }),
    }),
    defineField({
      name: 'handle',
      title: 'Handle/Texto del Enlace',
      type: 'string',
    }),
  ],
})