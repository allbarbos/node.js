const AWS = require('../services/aws');

const ocr = function (id, uriRecibo, base64Data) {
    return new Promise((resolve, reject) => {
        const rekognition = new AWS.Rekognition( { region: process.env.AWS_REKOGNITION_REGION } );
        
        const params = {
            Image: {
                Bytes: base64Data
            }
        };
        
        rekognition.detectText(params, function(err, data) {
            if (err) {
                reject(err);
            } else {
                let recibo = {};
                
                data.TextDetections.map(value => {
                    if (value.Type === 'LINE') {                 
                        switch (value.Id) {
                            case 1:
                                recibo.cartao = value.DetectedText.split("Numero Cartao: ")[1];
                                break;                    
                            case 2:                            
                                recibo.valor = value.DetectedText.split("Valor: R$ ")[1];
                                break;
                            case 3:
                                recibo.data = value.DetectedText.split("Data: ")[1];
                                break;
                            case 4:
                                recibo.prestador = value.DetectedText.split("Prestador: ")[1];
                                break;
                        }
                    }
                })

                recibo.id = `${id}-${recibo.cartao}`;
                recibo.uri = uriRecibo;
                resolve(recibo);
            }
        });
    });
}

module.exports = { ocr }