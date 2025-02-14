const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faq_types', {
    faq_type: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    faq_type_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'faq_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "faq_type" },
        ]
      },
    ]
  });
};
