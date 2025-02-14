const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('twilio_incoming_alerts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    to_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('CALL','SMS'),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    reqbody: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'twilio_incoming_alerts',
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
