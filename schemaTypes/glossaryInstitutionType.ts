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
      name: 'titlePt',
      title: 'Itens em PT',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'institutionItemPt',
          title: 'Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Título',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Itens em EN',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'institutionItemEn',
          title: 'Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
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
    defineField({
      name: 'titleEs',
      title: 'Itens em ES',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'institutionItemEs',
          title: 'Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Título',
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
      firstItem: 'titlePt.0.title',
    },
    prepare({displayMode, groupTitlePt, firstItem}) {
      return {
        title: groupTitlePt || firstItem || 'Instituição ou coletivo',
        subtitle: displayMode === 'single' ? 'Item único' : 'Grupo',
      }
    },
  },
})
