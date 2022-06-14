const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Modules = sequelize.define('module',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    module: {type: DataTypes.STRING, unique:true},
    path: {type: DataTypes.STRING},
})

const Years = sequelize.define('years', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    year: {type: DataTypes.INTEGER, unique:true},
    path: {type: DataTypes.STRING},
})

const Months = sequelize.define('months', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    months: {type:DataTypes.INTEGER, unique:true},
    path: {type: DataTypes.STRING}
})


module.exports = {
    User,
    Modules,
    Years,
    Months
}