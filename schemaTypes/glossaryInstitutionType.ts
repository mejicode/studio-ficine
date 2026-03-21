import {defineField, defineType} from 'sanity'

export const glossaryInstitutionType = defineType({
  name: 'glossaryInstitution',
  title: 'Glossário - Instituições e Coletivos',
  type: 'document',
  fields: [
    defineField({
      name: 'displayMode',
      title: 'Modo de exibição',
      type: 'string',
      initialValue: 'group',
      options: {
        list: [
          {title: 'Grupo', value: 'group'},
          {title: 'Item único', value: 'single'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'groupTitlePt',
      title: 'Título do grupo em PT',
      type: 'string',
    }),
    defineField({
      name: 'groupTitleEn',
      title: 'Título do grupo em EN',
      type: 'string',
    }),
    defineField({
      name: 'groupTitleEs',
      title: 'Título do grupo em ES',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Itens',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'institutionItem',
          title: 'Item',
          fields: [
            defineField({
              name: 'titlePt',
              title: 'Título em PT',
              type: 'string',
            }),
            defineField({
              name: 'titleEn',
              title: 'Title in EN',
              type: 'string',
            }),
            defineField({
              name: 'titleEs',
              title: 'Título en ES',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      displayMode: 'displayMode',
      groupTitlePt: 'groupTitlePt',
      firstItem: 'items.0.titlePt',
    },
    prepare({displayMode, groupTitlePt, firstItem}) {
      return {
        title: groupTitlePt || firstItem || 'Instituição ou coletivo',
        subtitle: displayMode === 'single' ? 'Item único' : 'Grupo',
      }
    },
  },
})
