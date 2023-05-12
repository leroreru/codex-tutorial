import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class data_purchase extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fullname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalproduct: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'data_purchase',
    schema: 'public',
    timestamps: false
  });
  }
}
