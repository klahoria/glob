const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pdp_plan_history', {
    ppf_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dp_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    plan_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    yearly_maximum: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    },
    primary_member_cost: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    },
    secondary_member_cost: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    },
    data_json: {
      type: DataTypes.STRING(4200),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_deactivated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pdp_plan_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ppf_id" },
        ]
      },
    ]
  });
};
