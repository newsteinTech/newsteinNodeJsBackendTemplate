import * as nodemailer from "nodemailer";
import { Secrets } from "../contants/secrets";

// create reusable transporter object using the default SMTP transport
export class MailService {
    private static transporter;

    private static getTransporter() {
        if (!MailService.transporter) {
            MailService.transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com', // "email-smtp.us-west-2.amazonaws.com ",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: Secrets.smtpUser, // "AKIAJQDLIUTQUvdcvsdUJ3PE6Q", //  user
                    pass: Secrets.smtpPass //"AnbYd6SPH89/sdfsgAG5mKTE+soEzkvbq808LNelyXs9r473p" //  password
                }
            })
        }

        return MailService.transporter;
    }

    public static sendInvitationForCodingRound(name: string, email: string) {
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Newstein " <info@newstein.in>', // sender address
            to: `${email}`, //`, ${email}`, // list of receivers
            bcc: `gaurav9939@gmail.com`,
            subject: 'NEWSTEIN: Shortlisted for Coding Round of Special 26', // Subject line
            text:  `Hi ${name},

Congratulations! You have been shortlisted for coding round of Special 26. 

Please come to Newstein Office on 7th July 2019 (Sunday) at 11:00 AM for coding round. 

Please bring hard copy of your resume. 

Time: 11:00 AM
Date: 7th July 2019
Venue: Newstein HRS Office
Location: https://maps.app.goo.gl/UUwi6WNyzbCGKfZJ9

Call P: 8618050662 for any other information. 

Newstein Special 26: https://newstein.in/fresher-placement-program-in-Bangalore
        
Regards,
Newstein Team
https://newstein.in
info@newstein.in`
            //html: '<b>Hello world?</b>' // html body
        };

        // send mail with defined transport object
        MailService.getTransporter().sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    }
    
}