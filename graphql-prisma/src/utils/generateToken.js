import jwt from 'jsonwebtoken'
import getUserId from './getUserId'

const generateToken = (id)=>{
    return jwt.sign({usedId: id}, 'thisisasecret', {expiresIn: '7 days'})
}

export {generateToken as default}