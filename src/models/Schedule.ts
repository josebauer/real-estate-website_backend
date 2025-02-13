import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";
import { RealEstateInstance } from "./RealEstate";
import { UserInstance } from "./User";

export interface Schedule {
  id: number,
  userId: number,
  realEstateId: number,
  scheduledDate: Date,
  status: "pendente" | "confirmado" | "cancelado"
}

export interface ScheduleCreationAttributes extends Optional<Schedule, "id" | "status"> {}

export interface ScheduleInstance extends Model<Schedule, ScheduleCreationAttributes>, Schedule {
  RealEstate?: RealEstateInstance;
  User?: UserInstance;
}

export interface ScheduleInstance extends Model<Schedule, ScheduleCreationAttributes>, Schedule {}
export const Schedule = sequelize.define<ScheduleInstance, Schedule>("Schedule", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  realEstateId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "realEstates",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  scheduledDate: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  status: {
    allowNull: false,
    type: DataTypes.ENUM("pendente", "confirmado", "cancelado"),
    defaultValue: "pendente",
  },
});