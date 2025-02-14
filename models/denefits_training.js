const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('denefits_training', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    training_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0: no, 1: yes"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_partner_course: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    course_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    course_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    course_img: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'denefits_training',
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
