import {defineField, defineType} from 'sanity'

export const teamType = defineType({
  name: 'team',
  title: 'Equipe',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Cargo',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio em PT',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'bioEng',
      title: 'Bio em EN',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'bioEs',
      title: 'Bio em ES',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),
  ],
})
