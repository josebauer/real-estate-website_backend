import uploadFileFeature from '@adminjs/upload'
import { BaseRecord, ComponentLoader, FeatureType, ResourceOptions } from "adminjs";
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'


export const realEstateResourceOptions: ResourceOptions = {
  navigation: {
    icon: 'Home'
  },
  properties: {
    negotiation: {
      availableValues: [
        { value: 'sale', label: 'Venda' },
        { value: 'rent', label: 'Locação' },
        { value: 'both', label: 'Venda e Locação'},
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
    'totalArea',
    'bedrooms',
    'suites',
    'garage',
    'uploadImages',
    'featured',
    'categoryId'
  ],
  filterProperties: [
    'title',
    'price',
    'negotiation',
    'description',
    'address',
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
    'imagesUrl',
    'featured',
    'categoryId',
    'createdAt',
    'updatedAt'
  ]
}

export const componentLoader = new ComponentLoader()
const __dirname = dirname(fileURLToPath(import.meta.url))

export const realEstateResourceFeatures: FeatureType[] = [
  uploadFileFeature({ 
    componentLoader,
    provider: {
      local: {
        bucket: path.join(__dirname, '..', '..', '..', 'public')
      }
    },
    properties: {
      key: 'imagesUrl',
      file: 'uploadImages'
    },
    uploadPath: (record: BaseRecord, filename: string) => `images/property-${record.get('id')}/${filename}`
  })
]