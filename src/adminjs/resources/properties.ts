import { ResourceOptions } from "adminjs";

export const propertyResourceOptions: ResourceOptions = {
  navigation: 'Cadastro',
  properties: {
    negotiation: {
      availableValues: [
        { value: 'Venda', label: 'Venda' },
        { value: 'Locação', label: 'Locação' },
        { value: 'Venda / Locação', label: 'Venda / Locação'},
      ],
    },
    description: {
      type: 'textarea',
      props: {
        rows: 5,
      }
    },
  },
  editProperties: [
    'title',
    'price',
    'negotiation',
    'description',
    'address',
    'buildingArea',
    'bedrooms',
    'suites',
    'garage',
    'uploadMainImage',
    'uploadSecondaryImages',
    'featured',
    'categoryId'
  ],
  filterProperties: [
    'title',
    'price',
    'negotiation',
    'description',
    'address',
    'buildingArea',
    'bedrooms',
    'suites',
    'garage',
    'featured',
    'categoryId',
    'createdAt',
    'updatedAt'
  ],
  listProperties: [
    'id',
    'title',
    'price',
    'negotiation',
    'address',
    'buildingArea',
    'featured',
    'categoryId'
  ],
  showProperties: [
    'id',
    'title',
    'price',
    'negotiation',
    'description',
    'address',
    'buildingArea',
    'bedrooms',
    'suites',
    'garage',
    'mainImage',
    'secondaryImages',
    'featured',
    'categoryId',
    'createdAt',
    'updatedAt'
  ]
}