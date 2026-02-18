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
        title: 'LinkTree',
        type: 'string',
      }),
    defineField({
        name: 'bio',
        title: 'Bio em PT',
        type: 'string',
      }),
      defineField({
        name: 'bioEng',
        title: 'Bio em EN',
        type: 'string',
      }),
      defineField({
        name: 'bioEs',
        title: 'Bio em ES',
        type: 'string',
      }),
      defineField({
        name: 'image',
        type: 'image',
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
        validation: (rule) => rule.required(),
      }),
  ]
})