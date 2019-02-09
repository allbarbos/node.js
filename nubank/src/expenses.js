const fs = require('fs');

const getExpenses = async function (path) {
    const data = fs.readFileSync(path, (err) => { if (err) { throw err; } });
    const csv = data.toString().split('\n');
    let expenses = [];

    csv.forEach((line, idx) => {
        if(idx == 0) return;

        const fields = line.split(',');
        const [date, category, title, amount] = fields;
        expenses.push({ title, amount });
    });

    return expenses;
}

const sumExpenseByTypes = function (expenses) {    
    let result = {};

    expenses.map(obj => {
        if(obj.title in result)
            result[obj.title] += parseFloat(obj.amount) | 0;
        else {  
            result[obj.title] = parseFloat(obj.amount) | 0;
        }
    });

    return result;
}

const writeFile = function (expenses) {
    let text = '';
    expenses.map(obj => text += `${ obj.title || '' } - ${ obj.amount || 0 }\n`);

    fs.writeFile('ordenada.txt', text, (err) => {
        if (err) throw err;
        console.log('## Arquivo ordenado com sucesso!');
    });
}
module.exports = {
    getExpenses,
    sumExpenseByTypes,
    writeFile
};