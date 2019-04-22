"use strict";

const orderExpenses = function(expenses) {
  let ordered = {};
  Object.keys(expenses)
    .sort()
    .forEach(function(key) {
      ordered[key] = expenses[key];
    });

  return ordered;
};

const getExpenses = function(data) {
  const csv = data.toString().split("\n");
  let expenses = {};

  csv.forEach((line, idx) => {
    if (idx == 0) return;

    const fields = line.split(",");
    const [date, category, title, amount] = fields;

    const key = title.replace(/"/g, "");
    const value = (parseFloat(expenses[key]) || 0) + parseFloat(amount);

    const month = date.split("-")[1];

    if (!expenses[month]) {
      expenses[month] = {};
    }

    if (!(key in expenses[month])) {
      expenses[month][key] = 0;
    }

    expenses[month][key] += Math.round(value * 100) / 100;
  });

  return expenses;
};

module.exports = {
  getExpenses,
  orderExpenses
};
