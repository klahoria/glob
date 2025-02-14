const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_domains', {
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
    domain_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ssl_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    template_deployed: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    domain_details: {
      type: DataTypes.JSON,
      allowNull: false
    },
    domain_type: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_template_update: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_dummy: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'partner_domains',
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
