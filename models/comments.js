module.exports = function(sequelize, DataTypes) {
    const Comments = sequelize.define("Comments", {
      // id AUTO_INCREMENT will be created for us and this will be the PRIMARY KEY
      comment: DataTypes.STRING,
      
    })
  
    Comments.associate = function(models){
      
      Comments.belongsTo(models.Users, {
        
        foreignKey: {
          allowNull: false
        }
      })
      Comments.belongsTo(models.Media, {
       
        foreignKey: {
          allowNull: false
        }
      })
    }
    return Comments;
  };