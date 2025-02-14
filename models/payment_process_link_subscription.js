const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_process_link_subscription', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pp_subscription_record_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('Text','Email'),
      allowNull: false
    },
    link_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "\t1- download-receipt, 2- payment link"
    },
    destination: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rc_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    date_sent: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'payment_process_link_subscription',
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
