import { RealEstate } from "../models";
import { Schedule } from "../models/Schedule";


export const scheduleService = {
  findByUserId: async (userId: number) => {
    const schedules = await Schedule.findAll({
      where: { userId },
      include: {
        model: RealEstate,
        as: "realEstate",
        attributes: [
          "id",
          "title",
          "price",
          "negotiation",
          "district",
          "city",
          "state",
          ["building_area", "buildingArea"],
          ["total_area", "totalArea"],
          "bedrooms",
          "suites",
          "garages",
          ["images_url", "imagesUrl"],
        ],
      },
    });

    return {
      userId,
      schedules: schedules.map((schedule) => ({
        id: schedule.id,
        realEstateId: schedule.realEstateId,
        realEstate: schedule.realEstate,
        scheduledDate: schedule.scheduledDate,
        status: schedule.status,
      })),
    };
  },

  create: async (userId: number, realEstateId: number, scheduledDate: Date) => {
    const schedule = await Schedule.create({
      userId,
      realEstateId,
      scheduledDate,
      status: "pendente"
    });

    return schedule;
  },

  delete: async (userId: number, scheduleId: number) => {
    await Schedule.destroy({
      where: {
        id: scheduleId,
        userId,
      },
    });
  },

  updateStatus: async (scheduleId: number, status: "pendente" | "confirmado" | "cancelado") => {
    const schedule = await Schedule.findByPk(scheduleId);

    if (!schedule) throw new Error("Agendamento não encontrado.");

    schedule.status = status;
    await schedule.save();

    return schedule;
  },
};