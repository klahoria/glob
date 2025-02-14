const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_otp', {
    otp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    otp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    otp_type: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    is_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if otp is verified with this phone number"
    },
    user_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-doctor 2-patient  3-partner 4-unregister user 5-enterprise 6-agent 7-location manager"
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rc_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    content_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    from_number: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    reset_counter: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'user_otp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "otp_id" },
        ]
      },
    ]
  });
};
