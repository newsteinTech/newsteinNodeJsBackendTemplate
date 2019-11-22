import * as http from "https";
import { Secrets } from "../contants/secrets";

export class SmsService {
    private static authKey: string = Secrets.sms91AuthKey;

    public static sendGenericSpecial26Invite(name: string, phoneNumbers: string) {
      let msg: string = `Hi ${name}, Newstein invite you to attend Intro Session of Special 26 Program where we will provide you complete details about the program and will go through Selection Process (coding round). 
Please take the Online Test if not completed yet. Please come to Newstein HSR Office. Please bring hard copy of your resume. Location: https://maps.app.goo.gl/UUwi6WNyzbCGKfZJ9 
For any other query, Call Ph: +91 8618050662. Visit: https://newstein.in

Date: 28th Sep 2019 (Saturday) or 29th Sep(Sunday).
Time: 12:00 - 2:00 PM.

Please ignore if already attended the Special 26 Session`;
      SmsService.sendSms(phoneNumbers, encodeURI(msg));
  }
    

    private static sendSms(phoneNumbers: string, message: string): void {
        var options = {
            method: "GET",
            host: 'api.msg91.com',
            port: null,
            path: `/api/sendhttp.php?authkey=${SmsService.authKey}&mobiles=${phoneNumbers}&message=${message}&sender=NEWSTN&route=4&country=91`,
            headers: {}
          };

          // "https://api.msg91.com";
          
          var req = http.request(options, function (res) {
            var chunks = [];
          
            res.on("data", function (chunk) {
              chunks.push(chunk);
            });
          
            res.on("end", function () {
              var body = Buffer.concat(chunks);
              console.log(body.toString());
            });
          });
          
          req.end();
    }
}