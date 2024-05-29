import { Category } from "./Category";
import { RealEstate } from "./RealEstate";
import { User } from "./User";

Category.hasMany(RealEstate, { as: 'realEstate' })
RealEstate.belongsTo(Category)

export {
  Category,
  RealEstate,
  User
}