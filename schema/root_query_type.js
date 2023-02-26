const graphql = require("graphql");
const { GraphQLObjectType } = graphql;

const users = require("./queries/users.query");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users,
  }),
});

module.exports = RootQuery;
