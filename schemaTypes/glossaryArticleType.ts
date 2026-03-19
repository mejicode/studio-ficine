import {defineField, defineType} from 'sanity'

export const glossaryArticleType = defineType({
  name: 'glossaryArticle',
  title: 'Glossário - Artigo',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titlePt',
      title: 'Título em PT',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Título em EN',
      type: 'string',
    }),
    defineField({
      name: 'titleEs',
      title: 'Título em ES',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'titlePt',
      subtitle: 'author',
    },
  },
})
