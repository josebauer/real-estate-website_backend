import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { scheduleService } from "../services/scheduleService";
import { userService } from "../services/userService";
import { sendEmail } from "../utils/emailService";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';

export const scheduleController = {
  // Method GET /schedules
  index: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;

    try {
      const schedules = await scheduleService.findByUserId(userId);
      return res.json(schedules);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  // Method POST /schedules
  save: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;
    const { realEstateId, scheduledDate } = req.body;

    try {
      const schedule = await scheduleService.create(userId, Number(realEstateId), new Date(scheduledDate));
      const user = await userService.findById(userId);

      const formattedDate = format(scheduledDate, "dd/MM/yyyy HH:mm", { locale: ptBR });

      await sendEmail(
        user.email,
        'Agendamento Realizado',
        `Olá, ${user.firstName}!\n\nSeu agendamento foi criado com sucesso para: ${formattedDate}.\nEm breve enviaremos uma atualização do status de seu agendamento.\n\nImobiliária JH`
      );
      return res.status(201).json(schedule);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  // Method DELETE /schedules/:id
  delete: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;
    const scheduleId = Number(req.params.id);

    try {
      await scheduleService.delete(userId, scheduleId);
      return res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  // Method PATCH /schedules/:id/status
  updateStatus: async (req: AuthenticatedRequest, res: Response) => {
    const scheduleId = Number(req.params.id);
    const { status } = req.body;

    try {
      const schedule = await scheduleService.updateStatus(scheduleId, status);
      return res.json(schedule);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
};