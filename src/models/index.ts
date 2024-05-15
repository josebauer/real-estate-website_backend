import { Category } from "./Category";
import { Property } from "./Property";

Category.hasMany(Property)
Property.belongsTo(Category)

export {
  Category,
  Property
}