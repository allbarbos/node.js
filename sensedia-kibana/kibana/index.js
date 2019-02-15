'use strict';

const dashboard = require('./modules/dashboard');
const visualizes = require('./modules/visualizes');

exports.dashboard = (req, res) => {
  try {
    if(!req.query.nomeApi) throw 'Nome da API inválido'    

    const template = dashboard.getTemplate(req.query.nomeApi);
    const obj = JSON.parse(template);
    
    res.status(200).json(obj);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.visualizes = (req, res) => {
  try {
    if(!req.query.idIndex) throw 'ID do index inválido';

    const template = visualizes.getTemplate(req.query.idIndex);
    const obj = JSON.parse(template);

    res.status(200).json(obj);    
  } catch (error) {
    res.status(400).json({ error });
  }
};