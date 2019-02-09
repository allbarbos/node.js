const { getExpenses, writeFile } = require('./expenses');

const init = async function () {
    const expenses =  await getExpenses('./nubank.csv');

    const ordered = expenses.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
    });;
    
    writeFile(ordered);
    // console.log(ordered);

    // const expensesSum = sumExpenseByTypes(expenses);    
    
    // const ordered = {};
    // Object.keys(expensesSum).sort().forEach(function(key) {
    //     ordered[key] = expensesSum[key];
    // });

    // console.log(ordered);
};

init();