// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import Contact from "App/Models/Contact";
import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {
async list({request}:HttpContextContract){
    const status=request.input('status');
   if(status==1){
    const Contacts= Contact.all();
    return Contacts;
   }else{
    const Users=User.all();
    return Users;
   }
}

async listId({request}: HttpContextContract){
    const id=request.input('id');
    const status=request.input('status');

    if(status==1){
        return Database.from('contacts').select('*').where('id',id);
    }else{
        return Database.from('Users').select('*').where('id',id);
     
    }
}

async delete({request, response}: HttpContextContract){
    const id=request.input('id');
    const user=await User.findOrFail(id);
    await user.delete();
    
    return response.status(200).send({mensagem: "usuario apagado"});
}

async update({request, response,}: HttpContextContract){
const id=request.input('id');
const name=request.input('name');
const email=request.input("email");
await User.query().where("id",id).update({name, email});

return response.status(200).send({mensagem: "usuario modificado"});
}

}
