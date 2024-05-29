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
        { value: 'both', label: 'Venda e Locação' },
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
  ],
  actions: {
    new: {
      layout: [
        ['@Header', { children: 'Insira abaixo os dados do imóvel' }],
        [
          { flexDirection: 'row', flex: true, marginTop: '3rem' },
          [
            ['title', { flexGrow: 1, marginRight: '10px' }],
            ['price', { flexGrow: 1, marginRight: '10px' }],
            ['negotiation', { flexGrow: 1 }]
          ]
        ],
        [[['description']]],
        [
          { flexDirection: 'row', flex: true },
          [
            ['zipCode', { flexGrow: 1, marginRight: '10px' }],
            ['address', { flexGrow: 1, marginRight: '10px' }],
            ['district', { flexGrow: 1, marginRight: '10px' }],
            ['city', { flexGrow: 1, marginRight: '10px' }],
            ['state']
          ]
        ],
        [
          { flexDirection: 'row', flex: true, width: 2 / 3 },
          [
            ['buildingArea', { flexGrow: 1, marginRight: '10px' }],
            ['totalArea', { flexGrow: 1 }],
          ]
        ],
        [
          { flexDirection: 'row', flex: true },
          [
            ['bedrooms', { flexGrow: 1, marginRight: '10px' }],
            ['suites', { flexGrow: 1, marginRight: '10px' }],
            ['garage', { flexGrow: 1 }]
          ]
        ],
        [[['uploadImages']]],
        [[['featured']]],
        [[['categoryId']]],
      ]
    },
    edit: {
      layout: [
        ['@Header', { children: 'Edite abaixo os dados do imóvel' }],
        [
          { flexDirection: 'row', flex: true, marginTop: '3rem' },
          [
            ['title', { flexGrow: 1, marginRight: '10px' }],
            ['price', { flexGrow: 1, marginRight: '10px' }],
            ['negotiation', { flexGrow: 1 }]
          ]
        ],
        [[['description']]],
        [
          { flexDirection: 'row', flex: true },
          [
            ['zipCode', { flexGrow: 1, marginRight: '10px' }],
            ['address', { flexGrow: 1, marginRight: '10px' }],
            ['district', { flexGrow: 1, marginRight: '10px' }],
            ['city', { flexGrow: 1, marginRight: '10px' }],
            ['state']
          ]
        ],
        [
          { flexDirection: 'row', flex: true, width: 2 / 3 },
          [
            ['buildingArea', { flexGrow: 1, marginRight: '10px' }],
            ['totalArea', { flexGrow: 1 }],
          ]
        ],
        [
          { flexDirection: 'row', flex: true },
          [
            ['bedrooms', { flexGrow: 1, marginRight: '10px' }],
            ['suites', { flexGrow: 1, marginRight: '10px' }],
            ['garage', { flexGrow: 1 }]
          ]
        ],
        [[['uploadImages']]],
        [[['featured']]],
        [[['categoryId']]],
      ]
    },
    show: {
      layout: [
        ['@Header', { children: 'Dados do imóvel' }],
        [
          { flexDirection: 'row', flex: true, width: 1 / 3, marginTop: '3rem' },
          [
            ['id', { flexgGrow: 1, marginRight: '4rem'}],
            ['title', { flexGrow: 1 }],
            ['price', { flexGrow: 1 }],
            ['negotiation', { flexGrow: 1 }]
          ]
        ],
        [[['description']]],
        [
          { flexDirection: 'row', flex: true, width: 2 / 3 },
          [
            ['zipCode', { flexGrow: 1 }],
            ['address', { flexGrow: 1 }],
            ['district', { flexGrow: 1 }],
            ['city', { flexGrow: 1 }],
            ['state']
          ]
        ],
        [
          { flexDirection: 'row', flex: true, width: 1 / 3 },
          [
            ['buildingArea', { flexGrow: 1 }],
            ['totalArea', { flexGrow: 1 }],
          ]
        ],
        [
          { flexDirection: 'row', flex: true, width: 1 / 3 },
          [
            ['bedrooms', { flexGrow: 1 }],
            ['suites', { flexGrow: 1 }],
            ['garage', { flexGrow: 1 }]
          ]
        ],
        [[['imagesUrl']]],
        [[['featured']]],
        [[['categoryId']]],
        [
          { flexDirection: 'row', flex: true, width: 1 / 3 },
          [
            ['createdAt', { flexGrow: 1 }],
            ['updatedAt', { flexGrow: 1 }],
          ]
        ],
      ]
    }
  }
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