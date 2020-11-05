import jwt from 'jsonwebtoken';
 import config from './config'
 const getToken = (user) => {
     return jwt.sign({
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
     }, config.JWT_SECRET,
     {
         expiresIn: '30d',
     })
 }

 const isAuth = (req, res, next) => {
     const authoriztion = req.headers.authorization;
     if(authoriztion){
         const token =  authoriztion.split(' ')[1];
         jwt.verify(token, config.JWT_SECRET, (err, decode) => {
             if(err){
             return res.status(401).send({msg: 'Invalid Token'})
            }
            req.user = decode;
            next();
            return
         });
     } else{
         return res.status(401).send({msg: "Token is not supplied"})
     }
     
 }

 const isAdmin = (req, res, next) => {
     if(req.user && req.user.isAdmin){
         return next();
     }
     return res.status(401).send({msg: 'Admin Token is not valid.'})
 }

 export {
     getToken, isAuth, isAdmin
 }

 