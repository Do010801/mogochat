import { Injectable } from '@nestjs/common';
import * as admin from "firebase-admin"

@Injectable()
export class AuthService {

    async veryfyToken(idToken:string){
        try{
            let verifyIdToken =await admin.auth().verifyIdToken(idToken);
            return verifyIdToken
        }
        catch{
            return null;
        }

    }
}
