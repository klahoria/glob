const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_educational_email', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    partner_email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    email_error: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1, 4, 7, 10, 13, 16, 22, 25"
    },
    email_read_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'partner_educational_email',
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
