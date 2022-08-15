import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { chat, chatSchema } from 'src/schemas/chat.schemas';
import { AuthService } from 'src/services/auth/auth.service';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';




@Module({
    imports: [MongooseModule.forFeature([{ name: chat.name, schema: chatSchema }])],
    controllers: [ChatController],
    providers: [ChatService,AuthService]
})
export class ChatModule {}
