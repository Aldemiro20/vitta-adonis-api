
import Contact from "App/Models/Contact";
import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Database from '@ioc:Adonis/Lucid/Database'

export default class ContactsController {
    async create({request}){
        const data=request.only(['name', 'email', 'telephone', 'status' ]);
        const user=await Contact.create(data);
        return user;

    }

    async list({request}: HttpContextContract){
        const status=request.input('status');
         return Database.from('contacts').select('*').where('status',status);
        }

    async listQ({request}: HttpContextContract){
        const id=request.input('id');
        return Database.from('contacts').select('*').where('id',id);
            }

    async update({request, response,}: HttpContextContract){
        const id=request.input('id');
        const name=request.input('name');
        const email=request.input("email");
        const telephone=request.input("telephone");
        const status=request.input("status");
        await Contact.query().where("id",id).update({name,email,telephone,status});
        
        return response.status(200).send({mensagem: "contacto modificado"});
        }

    async delete({request, response}: HttpContextContract){
        const id=request.input('id');
        const user=await Contact.findOrFail(id);
        await user.delete();
        
        return response.status(200).send({mensagem: "contacto apagado"});
    }

    async search({request}: HttpContextContract){
        const input=request.input('input');
        if(input!==undefined){
        return await Contact.query().where("email",input).orWhere("name", 'like', '%' +input+'%');
        }
        
      
    }
    
}
module.exports=ContactsController;
