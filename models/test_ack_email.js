const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_ack_email', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mail_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    contract_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doctor_email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    mail_template: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_send: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'test_ack_email',
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
