'use strict';

const { getExpenses } = require('./expenses');

exports.orderExpenses = (req, res) => {
  try {
    const contentType = req.get('content-type');
  
    if( 'text/plain' != contentType ) {
      throw 'Content-type error'
    }
  
    const body = req.body.toString();

    const expenses =  getExpenses(body.toString());

    const ordered = expenses.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
    });

    res.status(200).json(ordered);
    
  } catch (error) {
    res.status(400).json({ error });
  }
};