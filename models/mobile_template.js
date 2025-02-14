const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mobile_template', {
    id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    template_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    template_content: {
      type: DataTypes.STRING(750),
      allowNull: false,
      comment: "sms length"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    lang: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "en"
    }
  }, {
    sequelize,
    tableName: 'mobile_template',
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
