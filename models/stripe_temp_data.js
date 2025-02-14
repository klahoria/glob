const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stripe_temp_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stripe_account_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    stripe_secret: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    stripe_pk: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'stripe_temp_data',
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
