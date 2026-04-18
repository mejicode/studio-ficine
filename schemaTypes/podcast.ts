// schemas/podcast.ts
export const podcast = {
  name: 'podcast',
  title: 'Episódios do Podcast',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título do Episódio', type: 'string' },
    { name: 'description', title: 'Resumo/Notas', type: 'text' },
    { 
      name: 'audioFile', 
      title: 'Arquivo de Áudio', 
      type: 'file',
      options: { accept: 'audio/*' } 
    },
    { name: 'coverImage', title: 'Capa do Episódio', type: 'image' },
    { name: 'publishedAt', title: 'Data de Publicação', type: 'datetime' },
    { name: 'duration', title: 'Duração (em segundos)', type: 'number' },
  ]
}