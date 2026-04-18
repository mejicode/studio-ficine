import { defineField } from "sanity";

// schemas/podcast.ts
export const podcast = {
  name: 'podcast',
  title: 'Episódios do Podcast',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título do Episódio', type: 'string' },
    { name: 'description', title: 'Resumo/Notas', type: 'text' },
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
      options: { accept: 'audio/*' } 
    },
    { name: 'coverImage', title: 'Capa do Episódio', type: 'image' },
    { name: 'publishedAt', title: 'Data de Publicação', type: 'datetime' },
    { name: 'duration', title: 'Duração (em segundos)', type: 'number' },
    {
    name: 'category',
    title: 'Categoria (iTunes)',
    type: 'string',
    options: {
        list: ['Society & Culture', 'Education', 'Arts', 'History'], // Categorias que o Spotify entende
    }
    },
    {
    name: 'explicit',
    title: 'Conteúdo Explícito?',
    type: 'boolean',
    initialValue: false
    },  
] 
}