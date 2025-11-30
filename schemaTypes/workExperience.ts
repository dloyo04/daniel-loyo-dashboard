import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'workExperience',
    title: 'Experiencia Laboral',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título del Cargo',
            description: 'Ej: "Desarrollador Full Stack"',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Empresa',
            description: 'Ej: "Tiendas Daka"',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'startDate',
            title: 'Fecha de Inicio (para ordenar)',
            description: 'Usa esta fecha para ordenar las experiencias. La más nueva aparecerá primero.',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'period',
            title: 'Periodo',
            description: 'Ej: "Octubre 2024 - Actualidad" o "2023 - 2024"',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'imageUrl',
            title: 'Logo de la Empresa',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            description: 'Describe tus responsabilidades, logros y tecnologías utilizadas',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tecnologías (Tags)',
            description: 'Tecnologías y herramientas utilizadas',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            }
        }),
    ],
})
