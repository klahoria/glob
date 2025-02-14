const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unsubscribed_templates', {
    ut_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    template_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    user_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1-doctor 2-patient  3-partner"
    }
  }, {
    sequelize,
    tableName: 'unsubscribed_templates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ut_id" },
        ]
      },
    ]
  });
};
