const mongoose = require("mongoose");
const { GraphQLList, GraphQLString } = require("graphql");
const UserType = require("../../types/user.type");
const User = mongoose.model("user");

const users = {
  type: new GraphQLList(UserType),
  args: {
    userName: { type: GraphQLString },
  },
  resolve(parentValue, { userName }) {
    return new Promise((resolve, reject) => {
      User.find({ userName }).then(
        (resp) => {
          resp = resp.map((item) => {
            item.password = "##########";
            return item;
          });
          resolve(resp);
        },
        (error) => reject(error)
      );
    });
  },
};

module.exports = users;
