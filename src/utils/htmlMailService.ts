import * as nodemailer from "nodemailer";
import { Secrets } from "../contants/secrets";

// create reusable transporter object using the default SMTP transport
export class HtmlMailService {
    private static transporter;

    private static getTransporter() {
        if (!HtmlMailService.transporter) {
            HtmlMailService.transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com', // "email-smtp.us-west-2.amazonaws.com ",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: Secrets.smtpUser, // "AKIAJQDLsfIUTQUUJ3PE6Q", //  user
                    pass: Secrets.smtpPass //"wfgr/AG5mKTE+soEzkvbq808LNelyXs9r473p" //  password
                }
            })
        }

        return HtmlMailService.transporter;
    }

    public static sendGenericSpecial26Invite(name: string, email: string) {
        let subject: string = "Invitation for Special 26 Program";
        let body: string = `<html>
        <body>
            <table width="100">
                <tr>
                    <td style="font-style:normal; color:maroon; font-weight:bold">
                        <br>
                        <img src="https://newstein.in/assets/img/logo-317x96.png">
                    </td>
                </tr>
            </table>
            <p> Hi ${name},</p>
        
            <p><b>Please ignore if already attended the Special 26 Session </b></p>
            <p>We invite you to attend Intro <b>Session of Special 26 Program</b> where we will provide you complete 
                details about the program and will go through Selection Process (Coding round). Please take the Online Test if not completed yet. <b>Please bring HARD copy of your Resume.</b>
            </p>
        
            <br>
        
            <h3>Why Join Special 26 Program</h3>
            <p>In IT Industry, demand for the Skilled candidates are very high. Companies are paying to Consultancies, 
                Conducting multiple Hiring drives in Search of Skilled Candidates. Companies are spending huge amount of 
                money and efforts to fill these positions but in absence of right candidates these positions left vacant. 
            </p>
            <p>Fresher’s who are passing out of the college are not Industry ready due to the lack of skills needed in 
                the current IT Industry. With the <b>highly Competetive IT industry environment</b>, Companies are not willing to hire
                candidates who needs to trained for multiple months before they become Productive to Company. They are looking 
                for Skilled Candidates who can start working on Products and Services and become Productive within few weeks of 
                Joining. Because of that <b>Getting The First JOB has become so Difficult.</b>
            </p>
            <p>Founders of  Newstein, having  several years of  industry experience understand this gap and decides to launch 
                a program which can help the fresher’s  to develop those skills (both technical as well as the behavioral ) 
                and make them industry ready from the day one. We already have the tie up with the multiple MNC and start ups 
                which are ready to hire such candidates immediately after the training .So  with the help of these tie ups 
                and our contacts in the industry, our internal recruitment team  will make sure that each of our candidates 
                will match to the appropriate position.
            </p>
         
            <br>
        
            <p><b>Session of Special 26 Program</b></p>
            <p>Date :<b>  28th Sep, 2019 or 29 Sep, 2019</b></p> 
            <p>Time :<b> 12 - 2  PM</b></p>
            <p>Address :<b>1st floor, #221, 9th Main, 6th Sector, HSR Layout, Near Lawrence High School ICSE, Bengaluru, Karnataka 560034</b></p>  
             <p> <a href="https://maps.app.goo.gl/UUwi6WNyzbCGKfZJ9"> Location on Map </a></p>
        
            <p style='margin-top: 40px;'>Thanks & Regards</p>
            <p>Newstein R&D Team</p>
            <p>Ph: +91 8618050662</p>
            <p>Email: info@newstein.in</p>
            <a href="https://newstein.in">Newstein Website</p>
        
        </body>
        </html>`;
        let mailOptions = HtmlMailService.createEmailOption(name, email, subject, body);

        HtmlMailService.sendEmail(mailOptions);
    }

    private static sendEmail(mailOptions) {
        // send mail with defined transport object
        HtmlMailService.getTransporter().sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Message sent: %s', info.messageId);
            }
        });
    }

    private static createEmailOption(name: string, email: string, subject: string, body: string) {
        return {
            from: '"Newstein " <info@newstein.in>', // sender address
            to: `${email}`, //`, ${email}`, // list of receivers
            subject: `NEWSTEIN: ${subject}`, // Subject line
            html: body // html body
        };
    }
}