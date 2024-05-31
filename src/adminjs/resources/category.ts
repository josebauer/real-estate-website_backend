import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
  navigation: {
    icon: 'Tag'
  },
  editProperties: ['name', 'position'],
  filterProperties: ['name', 'position', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'position'],
  showProperties: ['id', 'name', 'position', 'createdAt', 'updatedAt'],
  actions: {
    new: {
      layout: [
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['name', { flexGrow: 1, mx: '5px' }],
            ['position', { flexGrow: 1, mx: '5px' }],
          ]
        ],
      ]
    },
    edit: {
      layout: [
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['name', { flexGrow: 1, mx: '5px' }],
            ['position', { flexGrow: 1, mx: '5px' }],
          ]
        ],
      ]
    },
    show: {
      layout: [
        ['@Header', { children: 'Dados da categoria' }],
        [
          { marginTop: '3rem' },
          [['id']]
        ],
        [
          { marginTop: '3rem' },
          [['name']]
        ],
        [
          { marginTop: '3rem' },
          [['position']]
        ],
        [
          { marginTop: '3rem' },
          [['createdAt']]
        ],
        [
          { marginTop: '3rem' },
          [['updatedAt']]
        ]
      ]
    }
  }
}