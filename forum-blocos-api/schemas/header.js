export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: 'backgroundImage',
            title: 'Wallpaper Image Background',
            type: 'array',
            of:[{
              name: 'image',
              title: 'Imagem do Slide',
              type: 'image'
            }],
            validation: Rule => Rule.required().min(1)
          }
    ]
}