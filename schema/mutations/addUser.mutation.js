const { GraphQLString } = require("graphql");
const { default: mongoose } = require("mongoose");
const UserType = require("../../types/user.type");
const { errorName } = require("../../utils/errorHandler");
const User = mongoose.model("user");

const addUser = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    mobile: { type: GraphQLString },
    address: { type: GraphQLString },
    occupation: { type: GraphQLString },
    income: { type: GraphQLString },
    idProofNumber: { type: GraphQLString },
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (
    parentValue,
    {
      name,
      email,
      mobile,
      address,
      occupation,
      income,
      idProofNumber,
      userName,
      password,
    }
  ) => {
    const resp = await User.find({ userName });
    if (resp.length === 1) {
      throw new Error(errorName.USER_ALREADY_EXISTS);
    } else {
      const saveResp = await new User({
        name,
        email,
        mobile,
        address,
        occupation,
        income,
        idProofNumber,
        userName,
        password,
        showWelcomeModal: true,
      }).save();
      return saveResp;
    }
  },
};

module.exports = addUser;
