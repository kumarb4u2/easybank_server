const { GraphQLString } = require("graphql");
const { default: mongoose } = require("mongoose");
const MaskData = require("maskdata");
const UserType = require("../../types/user.type");
const { errorName } = require("../../utils/errorHandler");
const User = mongoose.model("user");

const maskCardDetails = (cards) => {
  return cards.map((card) => {
    card.cardNumber = MaskData.maskCard(card.cardNumber, {
      maskWith: "X",
      unmaskedEndDigits: 0,
    });
    return card;
  });
};

const logIn = {
  type: UserType,
  args: {
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (parentValue, { userName, password }) => {
    const resp = await User.find({ userName, password });
    if (resp.length === 1 && resp[0].userName === userName) {
      resp[0].password = "######";
      resp[0].cards = maskCardDetails(resp[0].cards);
      resp[0].cardsCount = resp[0].cards.length;
      resp[0].accountsCount = resp[0].accounts.length;
      return resp[0];
    } else {
      throw new Error(errorName.USERNAME_PASSWROD_INVALID);
    }
  },
};

module.exports = logIn;
