import { User } from "../models"
import { UserCreationAttributes } from "../models/User"
import crypto from 'crypto';

export const userService = {
  findByEmail: async (email: string) => {
    const user = await User.findOne({
      where: {
        email
      }
    })
    return user
  },

  findById: async (id: number) => {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  },

  create: async (attributes: UserCreationAttributes) => {
    const user = await User.create(attributes)
    return user
  },

  update: async (id: number, attributes: {
    firstName: string,
    lastName: string,
    phone: string,
    email: string
  }) => {
    const [affectedRows, updatedUsers] = await User.update(attributes, { where: { id }, returning: true })
    
    return updatedUsers[0] 
  },

  updatePassword: async (id: number, password: string) => {
    const [affectedRows, updatedUsers] = await User.update({ password }, { 
      where: { id },
      returning: true,
      individualHooks: true
    })

    return updatedUsers[0]
  },

  generateResetCode: async (userId: number) => {
    const resetCode = crypto.randomInt(100000, 999999).toString()
    const expirationDate = new Date(Date.now() + 10 * 60 * 1000)

    const [affectedRows, updatedUsers] = await User.update(
      { resetCode, resetCodeExpires: expirationDate },
      { where: { id: userId }, returning: true }
    )

    return resetCode
  },

  verifyResetCode: async (email: string, code: string) => {
    const user = await User.findOne({ where: { email, resetCode: code } })
    if (!user || !user.resetCodeExpires || new Date() > user.resetCodeExpires) {
      throw new Error('Código inválido ou expirado.')
    }
    return user
  }
}