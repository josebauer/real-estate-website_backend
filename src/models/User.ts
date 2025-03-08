import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"
import bcrypt from 'bcrypt'

type CheckPasswordCallback = (error?: Error, isSame?: boolean) => void

export interface UserAttributes {
  id: number
  firstName: string
  lastName: string
  phone: string
  email: string
  password: string
  role: 'admin' | 'user',
  resetCode?: string
  resetCodeExpires?: Date 
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'resetCode' | 'resetCodeExpires'> { }

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number
  public firstName!: string
  public lastName!: string
  public phone!: string
  public email!: string
  public password!: string
  public role!: 'admin' | 'user'
  public resetCode?: string
  public resetCodeExpires?: Date

  public checkPassword(password: string, callbackfn: CheckPasswordCallback) {
    bcrypt.compare(password, this.password, (error, isSame) => {
      callbackfn(error, isSame)
    })
  }
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isIn: [['admin', 'user']]
    }
  },
  resetCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  resetCodeExpires: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'User',
  hooks: {
    beforeSave: async (user) => {
      if (user instanceof User && (user.isNewRecord || user.changed('password'))) {
        user.password = await bcrypt.hash(user.password.toString(), 10)
      }
    }
  }
})