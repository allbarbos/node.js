const save = function(AWS, id, base64, data) {
    return new Promise((resolve, reject) => {
        const type = base64.split(';')[0].split('/')[1];
        const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: `image_${id}`, 
            Body: data,
            ACL: 'public-read',
            ContentEncoding: 'base64',
            ContentType: `image/${type}`
        }

        const s3 = new AWS.S3();
        s3.upload(params, (err, data) => {
            if (err) { return console.log(err) }

            console.log(`Image successfully uploaded: ${data.Location}`);                        
            data.Location ? resolve(data.Location) : reject();
        }); 
    });
}

module.exports = { save }