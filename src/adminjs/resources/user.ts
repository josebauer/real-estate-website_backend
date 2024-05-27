import { ResourceOptions } from "adminjs";

export const userResourceOptions: ResourceOptions = {
  navigation: {
    icon: 'Users'
  },
  properties: {
    password: {
      type: 'password'
    },
    role: {
      availableValues: [
        { value: 'admin', label: 'Administrador' },
        { value: 'user', label: 'Usuário Padrão' }
      ]
    }
  },
  editProperties: [
    'firstName',
    'lastName',
    'phone',
    'email',
    'password',
    'role'
  ],
  filterProperties: [
    'firstName',
    'lastName',
    'phone',
    'email',
    'role',
    'createdAt',
    'updatedAt'
  ],
  listProperties: [
    'id',
    'firstName',
    'email',
    'role'
  ],
  showProperties: [
    'id',
    'firstName',
    'lastName',
    'phone',
    'email',
    'role',
    'createdAt',
    'updatedAt'
  ],

  actions: {
    new: {
      layout: [
        ['@Header', { children: 'Insira abaixo os dados do usuário' }],
        [
          { flexDirection: 'row', flex: true, marginTop: '3rem' },
          [
            ['firstName', { flexGrow: 1, marginRight: '10px' }],
            ['lastName', { flexGrow: 1, marginRight: '10px' }],
            ['phone', { flexGrow: 1 }]
          ]
        ],
        [
          { flexDirection: 'row', flex: true },
          [
            ['email', { flexGrow: 1, marginRight: '10px' }],
            ['password', { flexGrow: 1, marginRight: '10px' }],
            ['role', { flexGrow: 1 }]
          ]
        ]
      ]
    },
    edit: {
      layout: [
        ['@Header', { children: 'Edite abaixo os dados do usuário' }],
        [
          { flexDirection: 'row', flex: true, marginTop: '3rem' },
          [
            ['firstName', { flexGrow: 1, marginRight: '10px' }],
            ['lastName', { flexGrow: 1, marginRight: '10px' }],
            ['phone', { flexGrow: 1 }]
          ]
        ],
        [
          { flexDirection: 'row', flex: true },
          [
            ['email', { flexGrow: 1, marginRight: '10px' }],
            ['password', { flexGrow: 1, marginRight: '10px' }],
            ['role', { flexGrow: 1 }]
          ]
        ]
      ]
    },
    show: {
      layout: [
        ['@Header', { children: 'Dados do usuário' }],
        [
          { flexDirection: 'row', flex: true, width: 1 / 3, marginTop: '3rem' },
          [
            ['id', { flexgGrow: 1, marginRight: '5rem'}],
            ['firstName', { flexGrow: 1 }],
            ['lastName', { flexGrow: 1 }],
          ]
        ],
        [
          { flexDirection: 'row', flex: true, width: 1 / 3 },
          [
            ['phone', { flexGrow: 1 }],
            ['email', { flexGrow: 1 }],
          ]
        ],
        [[['role']]],
        [
          { flexDirection: 'row', flex: true, width: 1 / 3 },
          [
            ['createdAt', { flexGrow: 1 }],
            ['updatedAt', { flexGrow: 1 }]
          ]
        ]
      ]
    }
  }
}