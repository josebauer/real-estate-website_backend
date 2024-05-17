import { Category } from "./Category";
import { RealEstate } from "./RealEstate";
import { User } from "./User";

Category.hasMany(RealEstate)
RealEstate.belongsTo(Category)

export {
  Category,
  RealEstate,
  User
}