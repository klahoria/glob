const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faq_v2_bkp', {
    faq_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    answer: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1(active) 0(inactive)"
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1(doctor) 2(patient) 3(partner)"
    },
    que_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "order by this column"
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
    tableName: 'faq_v2_bkp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "faq_id" },
        ]
      },
    ]
  });
};
