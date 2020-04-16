module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
      // id AUTO_INCREMENT will be created for us and this will be the PRIMARY KEY
      Username: DataTypes.STRING,
      Password: DataTypes.STRING,
     
    })


 Users.associate = function(models){
  
      Users.hasMany(models.Comments, {
        onDelete: "cascade"
      })
    }
    return Users;
  };