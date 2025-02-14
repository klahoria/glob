const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_payment_matrix', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    min_financed_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    max_financed_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    primary_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1: Bank, 2: Card, 3: Any"
    },
    backup_required: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1: Required 2: Optional"
    },
    backup_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1: Bank, 2: Card, 3: Any"
    },
    can_switch: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Allow to Switch"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'business_payment_matrix',
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
