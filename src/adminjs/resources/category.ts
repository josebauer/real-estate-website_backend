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
          { flexDirection: 'row', flex: true },
          [
            ['name', { flexGrow: 1, marginRight: '10px' }],
            ['position', { flexGrow: 1 }],
          ]
        ],
      ]
    },
    edit: {
      layout: [
        [
          { flexDirection: 'row', flex: true },
          [
            ['id', { flexgGrow: 1, marginRight: '10px' }],
            ['name', { flexGrow: 1, marginRight: '10px' }],
            ['position', { flexGrow: 1 }],
          ]
        ],
      ]
    },
    show: {
      layout: [
        [
          { flexDirection: 'row', flex: true, width: 1 / 3 },
          [
            ['id', { flexgGrow: 1, marginRight: '5rem' }],
            ['name', { flexGrow: 1 }],
            ['position', { flexGrow: 1 }],
          ]
        ],
        [
          { flexDirection: 'row', flex: true, width: 1 / 3, marginTop: '2rem'},
          [
            ['createdAt', { flexGrow: 1 }],
            ['updatedAt', { flexGrow: 1 }],
          ]
        ],
      ]
    },
  }
}