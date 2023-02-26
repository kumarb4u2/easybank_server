const { GraphQLObjectType, GraphQLString } = require("graphql");

const transaction = new GraphQLObjectType({
  name: "TransactionType",
  fields: () => ({
    id: { type: GraphQLString },
    date: { type: GraphQLString },
    transactionType: { type: GraphQLString },
    amount: { type: GraphQLString },
    description: { type: GraphQLString },
    availableBalance: { type: GraphQLString },
  }),
});

module.exports = transaction;
