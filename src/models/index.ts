import { Category } from "./Category";
import { Properties } from "./Properties";

Category.hasMany(Properties)
Properties.belongsTo(Category)

export {
  Category,
  Properties
}