const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User} = require('../models/models')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles,
        email
    }
    return jwt.sign(payload, process.env.SECRET, {expiresIn: "2h"})
}

class UserController {

    async signup(req,res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return next(ApiError.badRequest('Ошибка при регистрации.'))
            }
            const {email,password, role, name} = req.body
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь уже существует.'))
            }
            var hashPassword = bcrypt.hashSync(password, 7);
            const user = await User.create({name, email, password: hashPassword, role})
            const token = generateAccessToken(user.id, user.role, user.email)
            return res.json({message:"Пользователь зарегистрирован", token})
        } catch (e) {
            return next(ApiError.badRequest('Ошибка при регистрации'))
        }
    } 

    async signin(req,res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if (!user) {
                return next(ApiError.internal('Пользователь не найден.'))
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return next(ApiError.internal('Пароль не верный.'))
            }
            const token = generateAccessToken(user.id, user.role, user.email)
            return res.json({token})
        } catch (e) {
            return next(ApiError.internal('Ошибка при входе.'))
        }
    }
    
    async check(req,res,next) {
        try {
            const token = generateAccessToken(req.user.id, req.user.role, req.user.email)
            return res.json({token})
        } catch (e) {
            
        }
    }
    
    async getuser(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
}
module.exports = new UserController()