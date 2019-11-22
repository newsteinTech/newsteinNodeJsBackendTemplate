
import * as mongoose from "mongoose";
import { Secrets } from "../contants/secrets";

export class Db {
    private static mongoUrl: string = Secrets.mongoConnectionUrl;

    public  static mongoSetup(){
        mongoose.connect(this.mongoUrl)
        .then(() => {
            console.log("connection successful");
        })
        .catch(error => {
            console.log(error);
            console.log("connection failed");
        });
    }
}