export default {
    name: 'searches',
    title : 'Searches',
    type: 'document',
    fields: [
        {name: 'title', title:'Title',type:'string'},
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        },
        {name: 'date', title:'Date',type:'string'},
        {name: 'button', title:'Button',type:'string'}
    ]
}