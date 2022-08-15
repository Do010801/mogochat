import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { chat } from 'src/schemas/chat.schemas';
import { ChatModule } from './chat.module';


@Injectable()
export class ChatService {
    constructor(@InjectModel(chat.name) private chatModel: Model<ChatModule>) {}

    // async create(body:any) {
    //     // let chats = await this.chatModel.create(this.chatModel)
    //     let chat = new this.chatModel(body)
    //     // console.log(chat)
    //     let _chatSave = await chat.save()
    //     return _chatSave;
    // }

    async create(body:any){
        let chat = new this.chatModel(body);
        // console.log(chat);
        let _chatSave = await chat.save();
        return _chatSave;
    }

      async GetAll(){
        return await this.chatModel.find().exec();
    }

    // async getfrom(from)
    // {
    //     return await this.chatModel.find(from : { from })
    // }

    async getById(id){
        return await this.chatModel.findById(id);
    }

    
    async updateChat(id , chat :string){
        let updateChat = await this.chatModel.findByIdAndUpdate(id, {  content: chat});
        console.log(updateChat)
    }
    
    async Delete(id){
        try {
            let del = await this.chatModel.findByIdAndDelete(id)
            return del;
        } catch (error) {
            return error;
        }
    }
}
