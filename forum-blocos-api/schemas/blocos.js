export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string'},
      {
        name: 'projects',
        title: 'Projects',
        type: 'array',
        of: [
          {
            title: 'Projects',
            type: 'object',
            fields: [
              {name:'idBloco', title: 'Id do Bloco (Ex: Nome do Bloco sem espaços e acentuação)',type:'string',validation: Rule => Rule.required()},
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                validation: Rule => Rule.required()
              },
              {
                name: 'slideFotos',
                title: 'Fotos para o Carrosel',
                type: 'array',
                of:[{
                  name: 'imagemSlide',
                  title: 'Imagem do Slide',
                  type: 'image'
                }],
                validation: Rule => Rule.required().min(1)
              },
              {
                name: 'technologies',
                title: 'Technologies',
                type: 'array',
                of: [
                  {
                    title: 'Technologies',
                    type: 'object',
                    fields: [
                      {
                        name: 'technology',
                        title: 'Technology',
                        type: 'string',
                      },
                    ],
                  },
                ],
                validation: Rule => Rule.required().min(1)
              },
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'simplificada',
                title: 'Descrição Simplificada (Mínimo: 150 caracteres / Máximo: 250 caracteres)',
                type: 'text',
                validation: Rule => Rule.required().min(150).max(250)
              },
              {
                name: 'description',
                title: 'Descrição Completa',
                type: 'text',
                validation: Rule => Rule.required().min(150)
              },
              {
                name:'ensaioBloco',title: 'Ensaios do Bloco',type:'object',fields:[
                  {
                    name:'diaSemana',
                    title:'Dias da Semana',
                    type: 'string'
                  },
                  {
                    name: 'horarioEnsaio',
                    title: 'Horário dos ensaios',
                    type: 'string'
                  },
                  {
                    name: 'dataEnsaio',
                    title: 'Data do Ensaio',
                    type: 'string'
                  }
                ]
              },
              {
                name:'saidaBloco',title: 'Saída do Bloco', type:'object',fields:[
                  {
                    name: 'dataSaida',
                    title: 'Data da Saída',
                    type: 'string'
                  },
                  {
                    name: 'horarioConcentra',
                    title: 'Horário da Concentração',
                    type: 'string'
                  },
                  {
                    name: 'horarioSaida',
                    title: 'Horário da Saída',
                    type: 'string'
                  }
                ]
              },
              {
                name:'percursoBloco',title:'Ruas do Bloco',type: 'array',of:[{name:'ruaBloco',title:'Rua do Percurso',type:'string'}]
              },
              {
                name:'diretoriaBloco',title:'Pessoas da Diretoria',type:'array',of:[{name:'diretorBloco',title:'Pessoa da Diretoria',type:'string'}]
              },
              {
                name:'bateriaBloco',title:'Pessoas da Bateria',type:'array',of:[{name:'bateriaBloco',title:'Pessoa da Bateria',type:'string'}]
              },
              {
                name:'integrantesBloco',title:'Quantidade de Integrantes',type:'number'
              },
              {
                name:'publicoBloco',title:'Público Médio',type:'number'
              },
              {
                name:'contatosBloco',title:'Contatos do Bloco',type:'array',of:[
                  {name:'emailBloco',title:'Email do Bloco',type:'string'},
                  {name:'telefoneBloco',title:'Telefone do Bloco',type:'string'}
                ]
              },
              {
                name:'socialBloco',title:'Redes Sociais',type: 'object',fields:[
                  {
                    name:'instagramBloco',title:'Instagram',type: 'string'
                  },
                  {
                    name:'facebookBloco',title:'Facebook',type: 'string'
                  },
                  {
                    name:'twitterBloco',title:'Twitter',type: 'string'
                  },
                  {
                    name:'youtubeBloco',title:'Youtube',type: 'string'
                  },
                  {
                    name:'siteBloco',title:'Site',type: 'string'
                  }
                ],
                description: 'Coloque o links completos, ex: https://www.instagram.com/....  Se o https não for adicionado nos campos abaixo, apresentará erro.' 
              }
              
            ],
          },
        ],
      },
      { name: 'button', title: 'Button', type: 'string' }
    ],
  };