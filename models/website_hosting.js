const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('website_hosting', {
    web_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    website_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dw_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "reference to draft_website"
    },
    service_data: {
      type: DataTypes.JSON,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    background_image: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    business_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    business_logo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    section: {
      type: DataTypes.JSON,
      allowNull: true
    },
    banner_heading: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sub_heading: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    about_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    about_title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    about_media: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    contact_title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    contact_email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    contact_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contact_address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    service_cta_button: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    service_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    theme_selected: {
      type: DataTypes.JSON,
      allowNull: true
    },
    contact_map_image: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    bg_type: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    selected_bg_color: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    selected_font_color: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    selected_theme_color: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "#1E0E62"
    },
    section_type_5: {
      type: DataTypes.ENUM('RIGHT','LEFT','DOUBLE','TRIPLE'),
      allowNull: true
    },
    section_data_5: {
      type: DataTypes.JSON,
      allowNull: true
    },
    section_type_6: {
      type: DataTypes.ENUM('RIGHT','LEFT','DOUBLE','TRIPLE'),
      allowNull: true
    },
    section_data_6: {
      type: DataTypes.JSON,
      allowNull: true
    },
    picture_media: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    isActive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'website_hosting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "web_id" },
        ]
      },
    ]
  });
};
