export default {
  name: 'subscriber',
  title: 'Assinantes Newsletter',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'E-mail',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'subscribedAt',
      title: 'Inscrito em',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
  ],
};