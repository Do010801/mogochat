import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {


    constructor(private authservice:AuthService){}

  async use(req: any, res: any, next: () => void) {
    let idToken = req.headers['authorization'];
    // console.log(idToken)
    if (idToken == undefined)
    {
      res.status(401).send('Unauthorized');
      return;
    }
    let verifyIdToken = await this.authservice.veryfyToken(idToken)
    if(verifyIdToken == null){
      res.status(401).send('Permission denied');
      return;
    }
    req.name = verifyIdToken;
    next();
  }
}
