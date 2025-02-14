const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_websites_shared', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    domain_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    web_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    refer_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'partner_websites_shared',
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
