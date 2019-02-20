const storage = require('../storage/aws-s3');
const rekognition = require('../services/rekognition');

exports.post = async (req, res, next) => {
    const base64 = req.body.image.replace(/^data:image\/\w+;base64,/, "");
    const base64Data = new Buffer.from(base64, 'base64');
    const id = Date.now();
    
    storage.save(id, base64, base64Data)
        .then(uriRecibo => rekognition.ocr(AWS, id, uriRecibo, base64Data))
        .then(recibo => res.send(recibo))
        .catch( error => res.send(error));
};