import { defineField, defineType } from "sanity";

export const glossaryType = defineType({
    name: 'glossary',
  title: 'Glossário',
  type: 'document',
  fields: [
    defineField({
      name: 'term',
      title: 'Termo em PT',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'termEng',
      title: 'Termo em EN',
      type: 'string',
    }),
     defineField({
      name: 'termEs',
      title: 'Termo em ES',
      type: 'string',
    }),
     defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
]
})
  