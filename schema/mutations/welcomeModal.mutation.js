const { GraphQLString, GraphQLBoolean } = require("graphql");
const { default: mongoose } = require("mongoose");
const UserType = require("../../types/user.type");
const User = mongoose.model("user");

const updateWelcomeModal = {
  type: UserType,
  args: {
    userName: { type: GraphQLString },
    welcomeModalSeen: { type: GraphQLBoolean },
  },
  resolve: async (parentValue, { userName, welcomeModalSeen }) => {
    console.log(userName, welcomeModalSeen);
    const resp = await User.updateOne(
      { userName },
      {
        showWelcomeModal: welcomeModalSeen,
      }
    );
    return resp;
  },
};

module.exports = updateWelcomeModal;
