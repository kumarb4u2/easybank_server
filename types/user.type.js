const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} = graphql;
const account = require("./account.type");
const card = require("./card.type");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    mobile: { type: GraphQLString },
    address: { type: GraphQLString },
    occupation: { type: GraphQLString },
    income: { type: GraphQLString },
    idProofNumber: { type: GraphQLString },
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
    showWelcomeModal: { type: GraphQLBoolean },
    accounts: {
      type: new GraphQLList(account),
    },
    cards: {
      type: new GraphQLList(card),
    },
    cardsCount: { type: GraphQLInt },
    accountsCount: { type: GraphQLInt },
  }),
});

module.exports = UserType;
