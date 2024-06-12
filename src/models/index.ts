import { Category } from "./Category";
import { Favorite } from "./Favorite";
import { RealEstate } from "./RealEstate";
import { User } from "./User";

Category.hasMany(RealEstate, { as: 'realEstate' })

RealEstate.belongsTo(Category)
RealEstate.belongsToMany(User, { through: Favorite })
RealEstate.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'real_estate_id' })

Favorite.belongsTo(RealEstate)
Favorite.belongsTo(User)

User.belongsToMany(RealEstate, { through: Favorite })
User.hasMany(Favorite, { as: 'favoritesRealEstate', foreignKey: 'user_id' })

export {
  Category,
  RealEstate,
  Favorite,
  User
}