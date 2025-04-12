const {DataTypes, Models}= require ('sequelize')
const sequelize = require('../database')

const User= sequelize.define('User', {
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,

    }
},
{
    tableName:'users'
}
)
module.exports =User;
