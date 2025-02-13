import { Category } from "./Category";
import { Favorite } from "./Favorite";
import { RealEstate } from "./RealEstate";
import { Schedule } from "./Schedule";
import { User } from "./User";

// Associação de categorias com imóveis
Category.hasMany(RealEstate, { as: 'realEstate' })
RealEstate.belongsTo(Category)

// Associação de imóveis com favoritos
RealEstate.belongsToMany(User, { through: Favorite })
RealEstate.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'real_estate_id' })

// Associação de usuários com favoritos
Favorite.belongsTo(RealEstate)
Favorite.belongsTo(User)
User.belongsToMany(RealEstate, { through: Favorite })
User.hasMany(Favorite, { as: 'favoritesRealEstate', foreignKey: 'user_id' })

// Associação de agendamentos
User.hasMany(Schedule, { as: 'schedules', foreignKey: 'user_id' });
RealEstate.hasMany(Schedule, { as: 'schedules', foreignKey: 'real_estate_id' });

Schedule.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
Schedule.belongsTo(RealEstate, { as: 'realEstate', foreignKey: 'real_estate_id' });

export {
  Category,
  RealEstate,
  Favorite,
  User,
  Schedule
}