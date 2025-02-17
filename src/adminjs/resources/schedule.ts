import { ActionResponse, ResourceOptions } from "adminjs";
import { Components } from "../components";
import { userService } from "../../services/userService";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';
import { sendEmail } from "../../utils/emailService";

export const scheduleResourceOptions: ResourceOptions = {
  navigation: {
    icon: 'Calendar'
  },  
  properties: {
    realEstateId: {
      reference: 'real_estates',
      isVisible: { list: true, edit: true, filter: true, show: true }
    },
    userId: {
      reference: 'users',
      isVisible: { list: true, edit: true, filter: true, show: true }
    },
    status: {
      components: {
        list: Components.StatusBadgeList,
        show: Components.StatusBadgeShow
      }
    }
  },
  editProperties: ['scheduledDate', 'realEstateId', 'status'],
  filterProperties: ['userId','scheduledDate', 'realEstateId', 'status', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'userId', 'scheduledDate', 'status'],
  showProperties: ['id', 'userId','scheduledDate', 'realEstateId', 'status', 'createdAt', 'updatedAt'],
  actions: {
    new: {
      layout: [
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['userId', { flexGrow: 1, mx: '5px' }],
            ['realEstateId', { flexGrow: 1, mx: '5px' }],
            ['scheduledDate', { flexGrow: 1, mx: '5px' }]
          ]
        ],
      ]
    },
    edit: {
      after: async (response: ActionResponse, request: any) => {
        if (response.record && request.payload.status) {
          const schedule = response.record.params;
          const user = await userService.findById(schedule.userId);

          if (user) {
            const formattedDate = format(
              schedule.scheduledDate,
              "dd/MM/yyyy HH:mm",
              { locale: ptBR }
            );

            await sendEmail(
              user.email,
              "Atualização de Status do Agendamento",
              `Olá, ${user.firstName}!\n\nO status do seu agendamento do dia ${formattedDate}, foi atualizado para: ${schedule.status.toUpperCase()}.\n\nImobiliária JH`
            );
          }
        }
        return response;
      },
      layout: [
        [
          { flexDirection: 'row', flex: true, flexWrap: 'wrap' },
          [
            ['scheduledDate', { flexGrow: 1, mx: '5px' }],
            ['realEstateId', { flexGrow: 1, mx: '5px' }],
            ['status', { flexGrow: 1, mx: '5px' }],
          ]
        ],
      ]
    },
    show: {
      layout: [
        ['@Header', { children: 'Dados do agendamento' }],
        [
          { marginTop: '3rem' },
          [['id']]
        ],
        [
          { marginTop: '3rem' },
          [['userId']]
        ],
        [
          { marginTop: '3rem' },
          [['scheduledDate']]
        ],
        [
          { marginTop: '3rem' },
          [['realEstateId']]
        ],
        [
          { marginTop: '3rem' },
          [['status']]
        ],
        [
          { marginTop: '3rem' },
          [['createdAt']]
        ],
        [
          { marginTop: '3rem' },
          [['updatedAt']]
        ]
      ]
    }
  }
}