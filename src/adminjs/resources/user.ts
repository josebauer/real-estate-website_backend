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
  ]
}