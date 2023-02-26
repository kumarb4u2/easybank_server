const { GraphQLList, GraphQLObjectType, GraphQLString } = require("graphql");
const transaction = require("./transaction.type");

const account = new GraphQLObjectType({
  name: "AccountType",
  fields: () => ({
    accountNumber: { type: GraphQLString },
    accountType: { type: GraphQLString },
    balance: { type: GraphQLString },
    transactions: {
      type: new GraphQLList(transaction),
    },
  }),
});

module.exports = account;
