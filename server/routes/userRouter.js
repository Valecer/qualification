const Router = require('express')
const router = new Router()
const UserController = require('../controllers/UserController')
const {check} = require("express-validator")
const authMiddleware = require('../middleware/authMiddleware')


router.post('/signup', [
    check('name', "Введите имя.").notEmpty,
    check('password', "Пароль должен содержать не менее 8 символов и не более 16 символов.").isLength({min:8, max:16})
],UserController.signup)
router.post('/signin', UserController.signin)
router.get('/auth',authMiddleware, UserController.check)

module.exports = router