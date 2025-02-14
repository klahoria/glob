const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_contact_queries_history', {
    query_history_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    query_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    speciality: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "how far you are? field value"
    },
    distance: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'wp_contact_queries_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "query_history_id" },
        ]
      },
    ]
  });
};
