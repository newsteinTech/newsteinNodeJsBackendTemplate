# Backend Template for Newstein Projects

# Prerequisite
1) Create contants directory in src directory.
2) add secrets.ts file in contants directory.
3) define class Secrets in secrets.ts and define mongoConectionUrl and other contants as per need.

```
export class Secrets {
    public static sms91AuthKey : string = "...";
    public static accessKeyId: string = "...";
    public static secretAccessKey: string = "...";
    public static bucketName: string = "..";
    public static smtpUser: "...";
    public static smtpPass: "...";

    public static mongoConnectionUrl: string = '...'; 


    public static buildUploadedFileUrl(fileName: string) : string {
        return `https://bucket-name.s3.ap-south-1.amazonaws.com/${fileName}`;
    }
}
```

# Set up
1) git clone https://github.com/newsteinTech/newsteinNodeJsBackendTemplate.git
2) cd newsteinNodeJsBackendTemplate
3) npm i
4) npm run start 

# Happy Coding :)