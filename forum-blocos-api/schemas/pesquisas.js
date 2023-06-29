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
        {name: 'button', title:'Button',type:'string'},
        {
            name: 'firstSection', 
            title:'Primeira Sessão',
            type: 'object',
            fields:
            [
                {
                    name: 'sideBarTitle',
                    title: 'Título Barra Lateral',
                    type: 'string'
                },
                {
                    name: 'contentSideBar',
                    title: 'Texto Barra Lateral',
                    type: 'text'
                },
                {
                    name: 'contentLittleBlocks',
                    title: 'Blocos de Dados',
                    type: 'array',
                    of:
                    [
                        {
                            name: 'dataLittleBlock',
                            title: 'Dados do Bloco de Dados',
                            type: 'object',
                            fields:
                            [
                                {
                                    name: 'title',
                                    title: 'Título',
                                    type: 'string'
                                },
                                {
                                    name : 'bigData',
                                    title: 'Dado em Destaque',
                                    type : 'string'
                                },
                                {
                                    name: 'blockDesc',
                                    title: 'Descrição do Bloco',
                                    type: 'string'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'secondSection', 
            title:'Segunda Sessão',
            type: 'object',
            fields:
            [
                {
                    name: 'sideBarTitle',
                    title: 'Título Barra Lateral',
                    type: 'string'
                },
                {
                    name: 'contentSideBar',
                    title: 'Texto Barra Lateral',
                    type: 'text'
                },
                {
                    name: 'contentLittleBlocks',
                    title: 'Blocos de Dados',
                    type: 'array',
                    of:
                    [
                        {
                            name: 'dataLittleBlock',
                            title: 'Dados do Bloco de Dados',
                            type: 'object',
                            fields:
                            [
                                {
                                    name: 'title',
                                    title: 'Título',
                                    type: 'string'
                                },
                                {
                                    name : 'bigData',
                                    title: 'Dado em Destaque',
                                    type : 'string'
                                },
                                {
                                    name: 'blockDesc',
                                    title: 'Descrição do Bloco',
                                    type: 'string'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'thirdSection', 
            title:'Terceira Sessão',
            type: 'object',
            fields:
            [
                {
                    name: 'sideBarTitle',
                    title: 'Título Barra Lateral',
                    type: 'string'
                },
                {
                    name: 'contentSideBar',
                    title: 'Texto Barra Lateral',
                    type: 'text'
                },
                {
                    name: 'contentLittleBlocks',
                    title: 'Blocos de Dados',
                    type: 'array',
                    of:
                    [
                        {
                            name: 'dataLittleBlock',
                            title: 'Dados do Bloco de Dados',
                            type: 'object',
                            fields:
                            [
                                {
                                    name: 'title',
                                    title: 'Título',
                                    type: 'string'
                                },
                                {
                                    name : 'bigData',
                                    title: 'Dado em Destaque',
                                    type : 'string'
                                },
                                {
                                    name: 'blockDesc',
                                    title: 'Descrição do Bloco',
                                    type: 'string'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'fourthSection', 
            title:'Quarta Sessão',
            type: 'object',
            fields:
            [
                {
                    name: 'sideBarTitle',
                    title: 'Título Barra Lateral',
                    type: 'string'
                },
                {
                    name: 'contentSideBar',
                    title: 'Texto Barra Lateral',
                    type: 'text'
                },
                {
                    name: 'contentLittleBlocks',
                    title: 'Blocos de Dados',
                    type: 'array',
                    of:
                    [
                        {
                            name: 'dataLittleBlock',
                            title: 'Dados do Bloco de Dados',
                            type: 'object',
                            fields:
                            [
                                {
                                    name: 'title',
                                    title: 'Título',
                                    type: 'string'
                                },
                                {
                                    name : 'bigData',
                                    title: 'Dado em Destaque',
                                    type : 'string'
                                },
                                {
                                    name: 'blockDesc',
                                    title: 'Descrição do Bloco',
                                    type: 'string'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}