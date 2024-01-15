const jwt = require("jsonwebtoken");
module.exports=(req, res, next) => {
    //1. Отримуєм токен
    //2. Розшифровуєм токен
    //3.Передаєм інформацію з токену далі
    
    try {
        const [type, token] = req.headers.authorization.split(" ")
        if(type==="Bearer" && token ) {
            const decoded = jwt.verify(token, "lviv")
            req.user = decoded
            next()
        }
        
        
    } catch (error) {
        res.status(401).json({ code: 401, msg: error.message });
        
    }
    

}

// {
//     students: [ 'Lesia', 'Egor', 'Max' ],
//     teacher: 'Bob',
//     id: '65a570ca2e4d8b5ccdce33d1',
//     iat: 1705344584,
//     exp: 1705373384
//   }