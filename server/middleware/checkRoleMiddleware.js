const jwt = require('jsonwebtoken')
module.exports = function(role) {
    return function (req,res,next){
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({messages:"Не авторизован."})
            }
            const decoded = jwt.verify(token, process.env.SECRET)
            if(decoded.role !== role) {
                return res.status(403).json({messages:"Роль не подходит"})
            }
            req.user = decoded
            next()
        } catch(e) {
            res.status(401).json({messages:"пользователь не авторизован"})
        }
    }
}
