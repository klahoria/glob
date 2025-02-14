const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_phase_admin_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    phase_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    old_admin_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    new_admin_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    changed_by_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_phase_admin_logs',
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
