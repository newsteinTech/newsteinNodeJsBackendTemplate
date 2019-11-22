import { SmsService } from "./smsService";
import { HtmlMailService } from "./htmlMailService";

export class NotificationService {
    public static sendGenericSpecial26Invite(user): void {
        HtmlMailService.sendGenericSpecial26Invite(user.name, user.email);
        SmsService.sendGenericSpecial26Invite(user.name, user.mobile);
    }
}