import { defineField, defineType } from "sanity";


export const tributeType = defineType({
    name: 'tribute',
  title: 'Homenagem',
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
      type: 'slug', 
        options: {source: 'title'},
        validation: (rule) => rule.required(),
    }),
     defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
    name: 'contextPt',
    title: 'Contexto do Projeto em PT',
    type: 'array',
    of: [{type: 'block'}],
    
  }),
    defineField({
    name: 'contextEng',
    title: 'Contexto do Projeto em EN',
    type: 'array',
    of: [{type: 'block'}],
    
  }),
   defineField({
    name: 'contextEs',
    title: 'Contexto do Projeto em ES',
    type: 'array',
    of: [{type: 'block'}],
    
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
   defineField({
      name: 'imageExtra1',
      type: 'image',
    }),
     defineField({
    name: 'contextPtExtra1',
    title: 'Contexto Extra 1 do Projeto em PT',
    type: 'array',
    of: [{type: 'block'}],
    
  }),
    defineField({
    name: 'contextEngExtra1',
    title: 'Contexto Extra 1 do Projeto em EN',
    type: 'array',
    of: [{type: 'block'}],
    
  }),
   defineField({
    name: 'contextEsExtra1',
    title: 'Contexto Extra 1 do Projeto em ES',
    type: 'array',
    of: [{type: 'block'}],
    
  }),
   defineField({
      name: 'videoExtra1',
      type: 'string',
    }),
    defineField({
      name: 'videoExtra2',
      type: 'string',
    }),
    defineField({
      name: 'videoExtra3',
      type: 'string',
    }),
    defineField({   
    name: 'videoExtra4',        
    type: 'string',
    }),
  ]
})