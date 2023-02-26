const { GraphQLList, GraphQLObjectType, GraphQLString } = require("graphql");
const transaction = require("./transaction.type");

const card = new GraphQLObjectType({
  name: "CardType",
  fields: () => ({
    cardNumber: { type: GraphQLString },
    cardType: { type: GraphQLString },
    cvv: { type: GraphQLString },
    expiry: { type: GraphQLString },
    creditLimit: { type: GraphQLString },
    annualCharges: { type: GraphQLString },
    transactions: {
      type: new GraphQLList(transaction),
    },
    cardCategory: { type: GraphQLString },
  }),
});

module.exports = card;
