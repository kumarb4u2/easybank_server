const { GraphQLObjectType } = require("graphql");
const addUser = require("./mutations/addUser.mutation");
const logIn = require("./mutations/login.mutation");
const openAccount = require("./mutations/openAccount.mutation");
const applyCreditCard = require("./mutations/applyCreditCard.mutation");
const updateWelcomeModal = require("./mutations/welcomeModal.mutation");

const root_mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser,
    logIn,
    openAccount,
    applyCreditCard,
    updateWelcomeModal,
  },
});

module.exports = root_mutations;
