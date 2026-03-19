import {defineField, defineType} from 'sanity'

export const tributeType = defineType({
  name: 'tribute',
  title: 'Homenagem',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo em PT',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleEng',
      title: 'Titulo em EN',
      type: 'string',
    }),
    defineField({
      name: 'titleEs',
      title: 'Titulo em ES',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitulo em PT',
      type: 'string',
    }),
    defineField({
      name: 'subtitleEng',
      title: 'Subtitulo em EN',
      type: 'string',
    }),
    defineField({
      name: 'subtitleEs',
      title: 'Subtitulo em ES',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagem do Hero',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'body',
      title: 'Texto principal em PT',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bodyEng',
      title: 'Texto principal em EN',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'bodyEs',
      title: 'Texto principal em ES',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'middleImages',
      title: 'Imagens do meio da pagina',
      type: 'array',
      of: [
        defineField({
          name: 'imageItem',
          title: 'Imagem',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'videoExtra1',
      title: 'Video extra 1',
      type: 'string',
    }),
    defineField({
      name: 'videoExtra2',
      title: 'Video extra 2',
      type: 'string',
    }),
    defineField({
      name: 'videoExtra3',
      title: 'Video extra 3',
      type: 'string',
    }),
    defineField({
      name: 'videoExtra4',
      title: 'Video extra 4',
      type: 'string',
    }),
  ],
})
