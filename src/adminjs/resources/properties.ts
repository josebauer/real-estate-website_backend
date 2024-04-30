import { ResourceOptions } from "adminjs";

export const propertyResourceOptions: ResourceOptions = {
  navigation: 'Cadastro',
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
    'description',
    'address',
    'buildingArea',
    'bedrooms',
    'suites',
    'garage',
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