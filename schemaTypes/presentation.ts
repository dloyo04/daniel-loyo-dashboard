import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'presentation',
  title: 'Presentation (Hero)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Imagen de Perfil',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})