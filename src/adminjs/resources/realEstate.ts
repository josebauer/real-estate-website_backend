import uploadFileFeature from '@adminjs/upload'
import { BaseRecord, FeatureType, ResourceOptions } from "adminjs";
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { Components, componentLoader } from '../components';

export const realEstateResourceOptions: ResourceOptions = {
  navigation: {
    icon: 'Home'
  },
  properties: {
    price: {
      components: {
        edit: Components.InputFormattedPrice
      }
    },
    negotiation: {
      availableValues: [
        { value: 'venda', label: 'Venda' },
        { value: 'locação', label: 'Locação' }
      ],
    },
    zipCode: {
      components: {
        edit: Components.InputZipCode
      }
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
    'garages',
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
    'garages',
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
    'garages',
    'imagesUrl',
    'featured',
    'categoryId',
    'createdAt',
    'updatedAt'
  ],
  actions: {
    new: {
      layout: [
        ['@Header', { children: 'Insira abaixo os dados do imóvel' }],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['title', { flexGrow: 1, mx: '5px' }],
            ['price', { flexGrow: 1, mx: '5px' }],
            ['negotiation', { flexGrow: 1, mx: '5px' }]
          ]
        ],
        [[['description', { mx: '5px' }]]],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['zipCode', { flexGrow: 1, mx: '5px' }],
            ['address', { flexGrow: 1, mx: '5px' }],
            ['district', { flexGrow: 1, mx: '5px' }],
            ['city', { flexGrow: 1, mx: '5px' }],
            ['state', { mx: '5px' }]
          ]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', width: 2 / 3 },
          [
            ['buildingArea', { flexGrow: 1, mx: '5px' }],
            ['totalArea', { flexGrow: 1, mx: '5px' }],
          ]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['bedrooms', { flexGrow: 1, mx: '5px' }],
            ['suites', { flexGrow: 1, mx: '5px' }],
            ['garages', { flexGrow: 1, mx: '5px' }]
          ]
        ],
        [[['uploadImages', { mx: '5px' }]]],
        [[['featured', { mx: '5px' }]]],
        [[['categoryId', { mx: '5px' }]]],
      ]
    },
    edit: {
      layout: [
        ['@Header', { children: 'Edite abaixo os dados do imóvel' }],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['title', { flexGrow: 1, mx: '5px' }],
            ['price', { flexGrow: 1, mx: '5px' }],
            ['negotiation', { flexGrow: 1, mx: '5px' }]
          ]
        ],
        [[['description', { mx: '5px' }]]],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['zipCode', { flexGrow: 1, mx: '5px' }],
            ['address', { flexGrow: 1, mx: '5px' }],
            ['district', { flexGrow: 1, mx: '5px' }],
            ['city', { flexGrow: 1, mx: '5px' }],
            ['state', { mx: '5px' }]
          ]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', width: 2 / 3 },
          [
            ['buildingArea', { flexGrow: 1, mx: '5px' }],
            ['totalArea', { flexGrow: 1, mx: '5px' }],
          ]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['bedrooms', { flexGrow: 1, mx: '5px' }],
            ['suites', { flexGrow: 1, mx: '5px' }],
            ['garages', { flexGrow: 1, mx: '5px' }]
          ]
        ],
        [[['uploadImages', { mx: '5px' }]]],
        [[['featured', { mx: '5px' }]]],
        [[['categoryId', { mx: '5px' }]]],
      ]
    },
    show: {
      layout: [
        ['@Header', { children: 'Dados do imóvel' }],
        [
          { marginTop: '3rem' },
          [['id', { mx: '5px' }]]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['title', { flexGrow: 1, mx: '5px' }],
            ['price', { flexGrow: 1, mx: '5px' }],
            ['negotiation', { flexGrow: 1, mx: '5px' }]
          ]
        ],
        [
          { marginTop: '3rem' },
          [['description', { mx: '5px' }]]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['zipCode', { flexGrow: 1, mx: '5px' }],
            ['address', { flexGrow: 1, mx: '5px' }],
            ['district', { flexGrow: 1, mx: '5px' }],
            ['city', { flexGrow: 1, mx: '5px' }],
            ['state', { mx: '5px' }]
          ]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['buildingArea', { flexGrow: 1, mx: '5px' }],
            ['totalArea', { flexGrow: 1, mx: '5px' }],
          ]
        ],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap', marginTop: '3rem' },
          [
            ['bedrooms', { flexGrow: 1, mx: '5px' }],
            ['suites', { flexGrow: 1, mx: '5px' }],
            ['garages', { flexGrow: 1, mx: '5px' }]
          ]
        ],
        [
          { marginTop: '3rem' },
          [['imagesUrl', { mx: '5px' }]]
        ],
        [
          { marginTop: '3rem' },
          [['featured', { mx: '5px' }]]],
        [
          { marginTop: '3rem' },
          [['categoryId', { mx: '5px' }]]],
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['createdAt', { flexGrow: 1, mx: '5px' }],
            ['updatedAt', { flexGrow: 1, mx: '5px' }],
          ]
        ],
      ]
    }
  }
}

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
      file: 'uploadImages',
      multiple: true
    },
    validation: {  mimeTypes: ["image/png", "image/jpeg", "image/jpg"] },
    uploadPath: (record: BaseRecord, filename: string) => `images/property-${record.get('id')}/${filename}`,
    multiple: true
  })
]