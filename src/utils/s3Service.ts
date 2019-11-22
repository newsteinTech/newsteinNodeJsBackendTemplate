import { ResponseModel } from '../dto/responseModel';

import * as AWS from 'aws-sdk';
import { Secrets } from '../contants/secrets';

export class S3Service {
    private static bucketName: string = Secrets.bucketName;

    public static async upload(req, res) {
        try {
            let s3bucket = new AWS.S3({
                accessKeyId: Secrets.accessKeyId,
                secretAccessKey: Secrets.secretAccessKey,
                apiVersion: '2006-03-01'
              });

             let file = req.files.file;

             console.log(req.files.file.name)
            var params = {
                Key: file.name,
                Body: file.data,
                ACL: 'public-read',
                Bucket: S3Service.bucketName
            };

            s3bucket.putObject(params).promise().then(data => {
                console.log('Successfully uploaded data ', data);
               
                return res.status(200).send(ResponseModel.getValidResponse(Secrets.buildUploadedFileUrl(file.name)));
            }, error => {
                console.error(error, error.stack);
                return res.status(200).send(ResponseModel.getInvalidResponse("fat gya"));
            })

            

        } catch (err) {
            console.log('ERROR MSG: ', err);
            return res.status(500).send(err);
        }
    }

}