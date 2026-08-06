import {defineField, defineType} from 'sanity'

export const youtubeType = defineType({
  name: 'youtube',
  title: 'Vídeo do YouTube',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL do vídeo',
      type: 'url',
      description: 'Cole a URL do YouTube, incluindo links youtu.be e YouTube Shorts.',
      validation: (rule) =>
        rule
          .required()
          .custom((url) => {
            if (typeof url !== 'string') return true

            try {
              const hostname = new URL(url).hostname.replace(/^www\./, '')
              return hostname === 'youtu.be' || hostname.endsWith('youtube.com')
                ? true
                : 'Use uma URL válida do YouTube.'
            } catch {
              return 'Use uma URL válida do YouTube.'
            }
          }),
    }),
    defineField({
      name: 'title',
      title: 'Título / descrição',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Legenda',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Vídeo do YouTube',
        subtitle,
      }
    },
  },
})
