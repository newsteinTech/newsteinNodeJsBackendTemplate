import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken';
import { UserModel } from '../models/shared/userModel';
import { ResponseModel } from '../dto/responseModel';

export class UserController {
    public static secretKey: string = "secret";
    private static user: UserModel;

    public static async dummyLogin(req: Request, res: Response) {
        // Generate Token
        if (req.body.mobile != "9999999999" || req.body.password != "password") {
            return res.send(ResponseModel.getInvalidResponse(["Either username or password is wrong"]));
        }

        let token = jwt.sign(req.body, UserController.secretKey, { expiresIn: '1h' } );
        return  res.send(ResponseModel.getValidResponse(token));
    }

    public static async signup(req: Request, res: Response) {
        // check user
        if (UserController.user != null) {
            return res.send(ResponseModel.getInvalidResponse(["Not Implemented"]));
        }
    }
}