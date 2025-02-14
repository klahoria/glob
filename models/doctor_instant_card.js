const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_instant_card', {
    card_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    last4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exp_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exp_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fingerprint: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    funding: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1- deleted 0- not deleted"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_instant_card',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "card_id" },
        ]
      },
    ]
  });
};
