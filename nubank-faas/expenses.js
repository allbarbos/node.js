const getExpenses = function (data) {
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

module.exports = {
    getExpenses
};