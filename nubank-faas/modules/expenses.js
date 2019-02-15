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
    let expensesMonth = {}

    csv.forEach((line, idx) => {
        if(idx == 0) return;

        const fields = line.split(',');
        const [date, category, title, amount] = fields;

        const key = title.replace(/"/g, '');
        const value = (parseFloat(expenses[key]) || 0 ) + parseFloat(amount);

        //expenses[key] = Math.round(value * 100) / 100;
        expensesMonth[key] = Math.round(value * 100) / 100;

        const month = date.split('-')[1]
        expenses[month] = expensesMonth;        
    });

    return expenses;
}


module.exports = {
    getExpenses,
    orderExpenses
};


