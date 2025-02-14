const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plans', {
    plan_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    plan_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    show_prospect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    show_doctor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    monthly_price: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: -1
    },
    yearly_price: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: -1
    },
    change_from: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "1513319400000"
    },
    partner_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "-1"
    }
  }, {
    sequelize,
    tableName: 'plans',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plan_id" },
        ]
      },
    ]
  });
};
