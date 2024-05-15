import { Category } from "./Category";
import { Property } from "./Property";
import { User } from "./User";

Category.hasMany(Property)
Property.belongsTo(Category)

export {
  Category,
  Property,
  User
}