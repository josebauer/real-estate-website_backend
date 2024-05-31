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
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['firstName', { flexGrow: 1, mx: '5px' }],
            ['lastName', { flexGrow: 1, mx: '5px' }],
            ['phone', { flexGrow: 1, mx: '5px' }]
          ]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['email', { flexGrow: 1, mx: '5px' }],
            ['password', { flexGrow: 1, mx: '5px' }],
            ['role', { flexGrow: 1, mx: '5px' }]
          ]
        ]
      ]
    },
    edit: {
      layout: [
        ['@Header', { children: 'Edite abaixo os dados do usuário' }],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['firstName', { flexGrow: 1, mx: '5px' }],
            ['lastName', { flexGrow: 1, mx: '5px' }],
            ['phone', { flexGrow: 1, mx: '5px' }]
          ]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['email', { flexGrow: 1, mx: '5px' }],
            ['password', { flexGrow: 1, mx: '5px' }],
            ['role', { flexGrow: 1, mx: '5px' }]
          ]
        ]
      ]
    },
    show: {
      layout: [
        ['@Header', { children: 'Dados do usuário' }],
        [
          { marginTop: '3rem' },
          [['id', { mx: '5px' }]],
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['firstName', { flexGrow: 1, mx: '5px' }],
            ['lastName', { flexGrow: 1, mx: '5px' }],
          ]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['phone', { flexGrow: 1, mx: '5px' }],
            ['email', { flexGrow: 1, mx: '5px' }],
          ]
        ],
        [
          { marginTop: '3rem' },
          [['role', { mx: '5px' }]]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['createdAt', { flexGrow: 1, mx: '5px' }],
            ['updatedAt', { flexGrow: 1, mx: '5px' }]
          ]
        ]
      ]
    }
  }
}