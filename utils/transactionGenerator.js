const { faker } = require("@faker-js/faker");

const generateTransaction = () => {
  const transactions = [];
  for (let i = 0; i < 100; i++) {
    const transaction = {
      id: faker.datatype.number({ min: 1000000 }),
      date: faker.date.past(),
      transactionType: faker.finance.transactionType(),
      amount: faker.finance.amount(),
      description: faker.finance.transactionDescription(),
    };
    transactions.push(transaction);
  }
  return transactions;
};

module.exports = generateTransaction;
