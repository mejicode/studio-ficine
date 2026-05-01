import {defineField} from 'sanity'

// schemas/podcast.ts
export const podcast = {
  name: 'podcast',
  title: 'Episódios do Podcast',
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
    {
      name: 'audioFile',
      title: 'Arquivo de Áudio',
      type: 'file',
      description: 'Use este campo para subir o arquivo de áudio diretamente no Sanity.',
      options: {accept: 'audio/*'},
    },
    defineField({
      name: 'spotifyEmbedCode',
      title: 'Código de embed do Spotify',
      type: 'text',
      description:
        'Cole aqui o iframe completo gerado pelo Spotify. Se este campo estiver preenchido, o site exibirá o player do Spotify diretamente na página.',
      rows: 6,
    }),
    {
      name: 'author',
      title: 'Autoria / Apresentação',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Transcrição / Conteúdo em PT',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      name: 'bodyEng',
      title: 'Transcrição / Conteúdo em EN',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      name: 'bodyEs',
      title: 'Transcrição / Conteúdo em ES',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {name: 'coverImage', title: 'Capa do Episódio', type: 'image'},
    {name: 'publishedAt', title: 'Data de Publicação', type: 'datetime'},
  ],
}
