const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_testimonials', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    domain_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1: Partner to Business, 2: Partner to Partner"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1: Payment Plans, 2: Payment Processing, 3: Accounts Receivable, 4: Testimonials"
    },
    content: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    designation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    author_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'partner_testimonials',
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
