const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_referral_reminders', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    referral_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    language_preferred: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "en"
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'business_referral_reminders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
