const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_socket', {
    socket_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'event_socket',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "socket_id" },
        ]
      },
    ]
  });
};
