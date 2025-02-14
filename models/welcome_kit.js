const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('welcome_kit', {
    kit_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ship_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    suggestions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ship_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    received_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reference_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_received: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_sent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    request_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    assigned_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'welcome_kit',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kit_id" },
        ]
      },
    ]
  });
};
