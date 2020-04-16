module.exports = function(sequelize, DataTypes) {
    const Media = sequelize.define("Media", {
      // id AUTO_INCREMENT will be created for us and this will be the PRIMARY KEY
      title: DataTypes.STRING,
      synopsis: DataTypes.STRING,
      rating: DataTypes.STRING,
      coverPhoto: DataTypes.STRING,
      type: DataTypes.STRING
    })
  
    Media.associate = function(models){
     
  
      Media.hasMany(models.Comments, {
        onDelete: "cascade"
      })
    }
    return Media;
  };