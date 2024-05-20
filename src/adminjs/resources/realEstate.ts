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
    state: {
      availableValues: [
        { value: 'ac', label: 'AC' },
        { value: 'al', label: 'AL' },
        { value: 'ap', label: 'AP' },
        { value: 'am', label: 'AM' },
        { value: 'ba', label: 'BA' },
        { value: 'ce', label: 'CE' },
        { value: 'df', label: 'DF' },
        { value: 'es', label: 'ES' },
        { value: 'go', label: 'GO' },
        { value: 'ma', label: 'MA' },
        { value: 'mt', label: 'MT' },
        { value: 'ms', label: 'MS' },
        { value: 'mg', label: 'MG' },
        { value: 'pa', label: 'PA' },
        { value: 'pb', label: 'PB' },
        { value: 'pr', label: 'PR' },
        { value: 'pe', label: 'PE' },
        { value: 'pi', label: 'PI' },
        { value: 'rj', label: 'RJ' },
        { value: 'rn', label: 'RN' },
        { value: 'rs', label: 'RS' },
        { value: 'ro', label: 'RO' },
        { value: 'rr', label: 'RR' },
        { value: 'sc', label: 'SC' },
        { value: 'sp', label: 'SP' },
        { value: 'se', label: 'SE' },
        { value: 'to', label: 'TO' },
      ]
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
    'zipCode',
    'address',
    'district',
    'city',
    'state',
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
    'zipCode',
    'address',
    'district',
    'city',
    'state',
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
    'negotiation',
    'district',
    'city',
    'state',
    'featured',
    'categoryId'
  ],
  showProperties: [
    'id',
    'title',
    'price',
    'negotiation',
    'description',
    'zipCode',
    'address',
    'district',
    'city',
    'state',
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