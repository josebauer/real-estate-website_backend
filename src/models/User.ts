import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"
import bcrypt from 'bcrypt'

type CheckPasswordCallback = (error?: Error, isSame?: boolean) => void

export interface User {
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

export interface UserCreationAttributes extends Optional<User, 'id' | 'resetCode' | 'resetCodeExpires'> { }

export interface UserInstance extends Model<User, UserCreationAttributes>, User {
  checkPassword: (password: string, callbackfn: CheckPasswordCallback) => void
}

export const User = sequelize.define<UserInstance, User>('User', {
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
  hooks: {
    beforeSave: async (user) => {
      if (user.isNewRecord || user.changed('password')) {
        user.password = await bcrypt.hash(user.password.toString(), 10)
      }
    }
  }
})

User.prototype.checkPassword = function (password: string, callbackfn: CheckPasswordCallback) {
  bcrypt.compare(password, this.password, (error, isSame) => {
    if (error) {
      callbackfn(error)
    } else {
      callbackfn(error, isSame)
    }
  })
}