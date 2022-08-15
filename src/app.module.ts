import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './chat/chat.module';
import { AuthService } from './services/auth/auth.service';
import { MiddlewareBuilder } from '@nestjs/core';
import { AuthMiddleware } from './middlewares/auth.middleware';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:010801@thanhdo.xafwba5.mongodb.net/?retryWrites=true&w=majority'),
    ChatModule,
    
  ],
  controllers: [AppController],
  providers: [AppService,AuthService],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path:'*',
      method: RequestMethod.ALL
    })
  }
}
