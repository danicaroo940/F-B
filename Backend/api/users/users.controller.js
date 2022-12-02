import registerUsers from "../db/users.db.js";
import jwt from 'jsonwebtoken';


function getToken(user){
    const payload = {
        user: user.name
    };
    const token = jwt.sign(payload, process.env.AUTH_SECRET_KEY,{
        expiresIn: process.env.AUTH_EXPIRES_IN
    });
    return token;
}


function createUser(req, res){
    const ids = registerUsers.map(item => item.id);
    const maxID = Math.max(...ids)
    const newUser = {
        id: maxID+1,
        user: req.body.user,
        pass: req.body.pass
    }
    const userExist = registerUsers.find(item => item.user === newUser.user);
    if (!userExist){
        registerUsers.push(newUser);
        res.json(registerUsers);
        console.log('usuario creado');
    } else {
        console.log('Este usuario ya existe');
        res.json(registerUsers);
    }
    
}
function loginUser (req, res){
    const userExist = registerUsers.find(item => item.user === req.body.user && item.pass === sha256(req.body.pass).toString());
    if (!userExist){
        res.send('USUARIO O CONTRASEÑA ERRONEOS').end();
        return
    }else{
        res.json({token});
    }
}


function deleteUserById(req, res){
    const id = Number(req.params.id);
    const xxx = registerUsers.filter(item => item.id !== id)
    registerUsers = xxx
   console.log(`-------------------${registerUsers}-------------------esto es text `);

   //Cambiar a splice 
    res.status(204).send(test);
}


export {createUser, deleteUserById, loginUser}