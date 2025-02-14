const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prospects', {
    prospect_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    prospect_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    prospect_email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    prospect_mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    plan_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    status_id: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    prospect_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    contact_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    practice_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    added_on: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'prospects',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "prospect_id" },
        ]
      },
    ]
  });
};
