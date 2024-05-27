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
            ['name', { flexGrow: 1, marginRight: '10px' }],
            ['position', { flexGrow: 1 }],
          ]
        ],
      ]
    },
  }
}