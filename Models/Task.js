const {DataTypes, Models}= require ('sequelize')
const sequelize = require('../database')
const User= require('./User')

const Task= sequelize.define('Task', {
    title: {
        type:DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    priority:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    due_date:{
        type: DataTypes.DATE,
        allowNull: false,

    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false, 
        references:{
            model:'users',
            key:'id'

        }

    }

},
{
    tableName:'tasks'
}
)

Task.belongsTo(User, {foreignKey:'userId'});
User.hasMany(Task, {foreignKey: 'userId'});

module.exports =Task;
