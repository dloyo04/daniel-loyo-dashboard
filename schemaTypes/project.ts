import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Proyectos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Proyecto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Fecha de Inicio (para ordenar)',
      description: 'Usa esta fecha para ordenar los proyectos. El más nuevo aparecerá primero.',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'period',
      title: 'Periodo',
      description: 'Ej: "2023 - Presente" o "2024"',
      type: 'string',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Imagen del Proyecto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'projectUrl',
      title: 'URL del Proyecto (Deploy)',
      type: 'url',
    }),
    defineField({
        name: 'repositoryUrl',
        title: 'URL del Repositorio (GitHub)',
        type: 'url',
      }),
    defineField({
      name: 'tags',
      title: 'Tecnologías (Tags)',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      }
    }),
  ],
})