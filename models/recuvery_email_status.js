const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recuvery_email_status', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    destination: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contract_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 = denefits, 1 = recuvery"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = sent, 1 = bounce, 2 = complaint"
    },
    is_email_read: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_link_open: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'recuvery_email_status',
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
