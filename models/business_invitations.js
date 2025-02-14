const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_invitations', {
    Invite_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    enterprise_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctor_first_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    doctor_last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    doctor_email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    doctor_mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    invitation_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'business_invitations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Invite_id" },
        ]
      },
    ]
  });
};
