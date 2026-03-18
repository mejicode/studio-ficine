import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categoria',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição em PT',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'color',
      title: 'Cor',
      type: 'string',
      options: {
        list: [
          {title: 'Azul', value: '#3B82F6'},
          {title: 'Verde', value: '#10B981'},
          {title: 'Vermelho', value: '#EF4444'},
          {title: 'Amarelo', value: '#F59E0B'},
          {title: 'Roxo', value: '#8B5CF6'},
          {title: 'Rosa', value: '#EC4899'},
          {title: 'Cinza', value: '#6B7280'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
