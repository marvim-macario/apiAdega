const loginService = require('../services/loginService')
const loginController = {

    find: async (req,res)=>{ 
        
        try {
            const result = await loginService.findUser(req);
           
            if(!result) return res.status(204).json({message:'usuario ou senha incorretos'});
            
            res.status(200).json({success:'ok',perfil:result[0].perfil});

        } catch (error) {

            res.status(500).json({message:'erro interno no servidor'});
        }
    }
}

module.exports = loginController;