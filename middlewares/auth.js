import jwt from 'jsonwebtoken'

export const authMiddleware = (request, response, next) =>{
    const JWT_SECRET = process.env.JWT_SECRET
    
    const token = request.headers.authorization

    if(!token){
        return response.status(401).json({message: 'Denied access'})
    }
    
    try{
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET)
    }catch(error){
        return response.status(401).json({message: 'Invalid token'})
    }
    
    next()
}