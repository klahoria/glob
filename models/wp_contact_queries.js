const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_contact_queries', {
    query_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "city_id(city_extended)"
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "personal address"
    },
    speciality: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Speciality"
    },
    speciality_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    distance: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "how far you are? field value"
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1(doctor) 2(patient) 3(partner)"
    },
    src_url: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "source website detailed url"
    },
    metadata: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "metadata from which panel and user type etc."
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'wp_contact_queries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "query_id" },
        ]
      },
    ]
  });
};
