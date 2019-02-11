'use strict';

const { getExpenses, orderExpenses } = require('./modules/expenses');

exports.expenses = (req, res) => {
  const contentType = req.get('content-type');
  const body = req.body.toString();

  try {
    if( 'text/plain' != contentType ) throw 'Content-type error'
    
    const expenses =  getExpenses(body.toString());
    const ordered = orderExpenses(expenses);
    res.status(200).json(ordered);
    
  } catch (error) {
    res.status(400).json({ error });
  }
};