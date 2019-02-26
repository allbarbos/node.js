'use strict';

const dashboardGetTemplate = require('./modules/dashboard');
const visualizesTemplate = require('./modules/visualizes');

exports.dashboard = (req, res) => {
  try {
    if(!req.query.nomeApi) throw 'Nome da API inválido'    

    const template = dashboardGetTemplate(req.query.nomeApi);
    const obj = JSON.parse(template);
    
    res.status(200).json(obj);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.visualizes = (req, res) => {
  try {
    if(!req.query.idIndex) throw 'ID do index inválido';

    const template = visualizesTemplate(req.query.idIndex);
    const obj = JSON.parse(template);

    res.status(200).json(obj);    
  } catch (error) {
    res.status(400).json({ error });
  }
};
