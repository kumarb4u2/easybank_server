const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const RootQueryType = require("./root_query_type");
const root_mutations = require("./root_mutations");

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: root_mutations,
});
