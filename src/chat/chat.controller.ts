import { Body, Controller, Delete, Get, Post, Put,Headers, Req,Request } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService,private authService:AuthService){}

    @Get()
    getAll(){
        return this.chatService.GetAll();
    }

    @Get("/id")
    getById(@Body('id') id){
        console.log(id)
        return this.chatService.getById(id)
    }

    @Post()
    async create(@Body() body: any,@Request() req:any){
    
        // console.log(idToken)
        // let verifyIdToken = this.authService.veryfyToken(idToken);
        
        // console.log((await verifyIdToken).email)
        body.name = req.name.uid;
        // console.log(req.name)
        return await this.chatService.create(body);
    }


    @Put()
    updateChat(@Body('_id') id, @Body('content') chat){
        console.log(id)
        console.log(chat)
        return this.chatService.updateChat(id,chat)
    }

    @Delete()
    DEL(@Body('id') id){
        console.log(id)
        return this.chatService.Delete(id)
    }
}
