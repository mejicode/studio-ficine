import {defineArrayMember, defineField} from 'sanity'

export const flexibleContent = [
  defineArrayMember({type: 'block'}),
  defineArrayMember({
    type: 'image',
    title: 'Imagem',
    options: {hotspot: true},
    fields: [
      defineField({
        name: 'alt',
        title: 'Texto alternativo',
        type: 'string',
        description: 'Descreva a imagem para leitores de ecrã.',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'credit',
        title: 'Legenda da imagem',
        type: 'string',
        description: 'Texto visível abaixo da imagem.',
      }),
      defineField({
        name: 'layout',
        title: 'Apresentação',
        type: 'string',
        initialValue: 'full',
        options: {
          list: [
            {title: 'Largura completa', value: 'full'},
            {title: 'Larga', value: 'wide'},
            {title: 'À esquerda', value: 'left'},
            {title: 'À direita', value: 'right'},
          ],
          layout: 'radio',
        },
      }),
    ],
  }),
  defineArrayMember({type: 'youtube'}),
]
