import { defineField, defineType } from "sanity";

export const glossaryInstitutionType = defineType({
  name: 'glossaryInstitution',
  title: 'Glossário - Instituições e Coletivos',
  type: 'document',
  fields: [
    defineField({
      name: 'localPt',
      title: 'Local em PT',
      type: 'string',
    }),
      defineField({
      name: 'localEn',
      title: 'Local em EN',
      type: 'string',
    }),
     defineField({
      name: 'localEs',
      title: 'Local em ES',
      type: 'string',
    }),
    defineField({
      name: 'titlePt',
      title: 'Título  + Link em PT',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Título  + Link em EN',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'titleEs',
      title: 'Título  + Link em ES',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        },
      ],
    }),
]
})
  