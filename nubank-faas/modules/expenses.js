'use strict';

const orderExpenses = function (expenses) {
    let ordered = {};
    Object.keys(expenses).sort().forEach(function(key) {
      ordered[key] = expenses[key];
    });

    return ordered;
};


const getExpenses = function (data) {
    const csv = data.toString().split('\n');
    let expenses = {};

    csv.forEach((line, idx) => {
        if(idx == 0) return;

        let fields = line.split(',');
        let [date, category, title, amount] = fields;

        let key = title.replace(/"/g, '');
        let value = (parseFloat(expenses[key]) || 0 ) + parseFloat(amount);

        expenses[key] = Math.round(value * 100) / 100;
    });

    return expenses;
}


module.exports = {
    getExpenses,
    orderExpenses
};