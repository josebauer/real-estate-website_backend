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
            ['name', { flexGrow: 1, mx: '5px'}],
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
    }
  }
}