import{Sequelize} from "sequelize"
const sequelize=new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect:"postgres",
    pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
    }
  }
)


import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _customer from  "./customer.js";
import _orders from  "./orders.js";
import _users from  "./users.js";

function initModels(sequelize) {
  const customer = _customer.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  customer.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(customer, { as: "customers", foreignKey: "user_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});

  return {
    customer,
    orders,
    users,
  };
}

const models = initModels(sequelize)
export default models;
export{sequelize}
