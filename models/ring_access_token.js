const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ring_access_token', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mobile_linked: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    access_token: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    expires_in: {
      type: DataTypes.MEDIUMINT,
      allowNull: false
    },
    refresh_token: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    refresh_token_expires_in: {
      type: DataTypes.MEDIUMINT,
      allowNull: false
    },
    scope: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'ring_access_token',
    hasTrigger: true,
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
