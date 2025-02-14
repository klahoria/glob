const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('table_audit_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    table_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    action_type: {
      type: DataTypes.ENUM('INSERT','UPDATE','DELETE'),
      allowNull: true
    },
    primary_id_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    primary_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    changed_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'table_audit_logs',
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
