const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('industries', {
    ind_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ind_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ind_is_guaranteed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    dynamic_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1(verified) 0(not verified)"
    },
    added_by: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "1(admin) 2(Doctor)"
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1(deleted) 0(not deleted)"
    },
    order_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 999
    },
    bsa_form_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2,
      comment: "1-healthcare 2 business"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'industries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ind_id" },
        ]
      },
    ]
  });
};
