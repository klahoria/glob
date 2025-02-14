const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_profile_registration', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    practice_model: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    number_of_employee: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    practice_tenure: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    customer_enroll_per_month: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    average_service_amount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    website_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    facebook_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instagram_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    yelp_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    others_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    client_base: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    practice_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    crime_status: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_profile_registration',
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
