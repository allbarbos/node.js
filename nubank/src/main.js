const { getExpenses, sumExpenseByTypes } = require('./modules/expenses');

const init = async function () {
    const expenses =  await getExpenses('./nubank-2018-12.csv');
    
    const expensesSum = sumExpenseByTypes(expenses);    
    
    const ordered = {};
    Object.keys(expensesSum).sort().forEach(function(key) {
        ordered[key] = expensesSum[key];
    });

    console.log(ordered);
};

init();