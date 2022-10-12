import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext"
import User from "App/Models/User";
export default class AuthController {

    async index(){
        const users= await User.all();
        return users;
    }
    
    
   async create({request}){
        const data=request.only(['name', 'email', 'password']);
        const user=await User.create(data);
        return user;

    }

    async login({request, response, auth}: HttpContextContract){
        try {
            const {email, password}=request.all();
            const token=await auth.attempt(email, password);
            return token;

        }catch(error){
            return response.status(500).send({error: error});
        }
    }
    logout(){

    }
    
}

