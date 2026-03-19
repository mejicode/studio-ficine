import {defineField, defineType} from 'sanity'

export const glossaryThesesType = defineType({
  name: 'glossaryTheses',
  title: 'Glossário - Teses | Dissertações | Monografias',
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
    defineField({
      name: 'publicationLocation',
      title: 'Local de publicação',
      type: 'string',
    }),
    defineField({
      name: 'publicationYear',
      title: 'Ano de publicação',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'titlePt',
      subtitle: 'author',
    },
  },
})
  
