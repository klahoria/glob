const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_preapproval_link', {
    link_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    link_token: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approved_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    have_website: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "is business have website or not to integrate button"
    },
    website_url: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    have_code_access: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'business_preapproval_link',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "link_id" },
        ]
      },
    ]
  });
};
