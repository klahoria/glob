const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    pc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pc_code: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    old: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "for downpayment limits"
    },
    pc_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    service_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    service_amount_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2,
      comment: "1: Exact, 2: Range"
    },
    dp_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    terms: {
      type: DataTypes.STRING(265),
      allowNull: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    products_array: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('1','2'),
      allowNull: true,
      comment: "1-Exact , 2-Range_wise"
    },
    website_navigation_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    interest_rate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    contract_type: {
      type: DataTypes.ENUM('2','3','6'),
      allowNull: false,
      defaultValue: "2"
    },
    show_desc: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    additional_products_array: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pc_id" },
        ]
      },
    ]
  });
};
