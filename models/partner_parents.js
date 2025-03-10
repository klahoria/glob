const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const PartnerParents = sequelize.define('partner_parents', {
    para_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    previous_para_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partner_email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    partner_json: {
      type: DataTypes.STRING(7500),
      allowNull: false
    },
    partner_json_new: {
      type: DataTypes.STRING(7500),
      allowNull: true
    },
    referral_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    partner_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_show_api_doc: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    api_doc_json_link: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    is_blocked: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    is_new: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    date_added: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    is_blocked_type: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "1 for not active, 2 for fraudulent and 3 for other"
    },
    blocked_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'partner_parents',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "para_id" },
        ]
      },
    ]
  });

  PartnerParents.associate = (models) => {
    PartnerParents.belongsTo(models.partner_parents, {
      foreignKey: 'partner_id',
      as: 'partnerParents'
    })
  }

  return PartnerParents;
};
