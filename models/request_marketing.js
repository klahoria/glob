const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('request_marketing', {
    req_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ship_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    english_brochures: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    spanish_brochures: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    brochures_holders: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    posters: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stickers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    welcome_kit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    english_brochures_sent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    spanish_brochures_sent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    brochures_holders_sent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    posters_sent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stickers_sent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    welcome_kit_sent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    auto_marketing: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'request_marketing',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "req_id" },
        ]
      },
    ]
  });
};
