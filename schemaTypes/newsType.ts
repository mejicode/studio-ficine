import {defineField, defineType} from 'sanity'

export const newsType = defineType({
  name: 'news',
  title: 'Notícias',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título em PT',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleEng',
      title: 'Título em EN',
      type: 'string',
    }),
      defineField({
      name: 'titleEs',
      title: 'Título em ES',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo em PT',
      type: 'string',
    }),
    defineField({
      name: 'subtitleEng',
      title: 'Subtítulo em EN',
      type: 'string',
    }),
    defineField({
      name: 'subtitleEs',
      title: 'Subtítulo em ES',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'externalLink',
      title: 'Link Externo',
      type: 'url',
    }),
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Corpo do Post em PT',
      type: 'array',
      of: [{type: 'block'}],
  }),
    defineField({
      name: 'bodyEng',
      title: 'Corpo do Post em EN',
      type: 'array',
      of: [{type: 'block'}],
    }),
     defineField({
      name: 'bodyEs',
      title: 'Corpo do Post em ES',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})