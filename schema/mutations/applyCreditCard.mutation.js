const { GraphQLString } = require("graphql");
const { default: mongoose } = require("mongoose");
const UserType = require("../../types/user.type");
const { errorName } = require("../../utils/errorHandler");
const generateTransaction = require("../../utils/transactionGenerator");
const User = mongoose.model("user");

const applyCreditCard = {
  type: UserType,
  args: {
    userName: { type: GraphQLString },
    cardCategory: { type: GraphQLString },
    income: { type: GraphQLString },
  },
  resolve: async (parentValue, { userName, cardCategory, income }) => {
    let creditLimit, annualCharges;
    if (cardCategory === "Platinum") {
      if (+income < 500000) {
        throw new Error(errorName.INCOME_NOT_SUFFICIENT_PLATINUM);
      } else {
        creditLimit = 150000;
        annualCharges = 2500;
      }
    } else if (cardCategory === "Gold") {
      if (+income < 200000) {
        throw new Error(errorName.INCOME_NOT_SUFFICIENT_GOLD);
      } else {
        creditLimit = 50000;
        annualCharges = 1000;
      }
    } else {
      throw new Error(errorName.INVALID_CARD_CATEGORY);
    }
    const cardNumber = Math.floor(Math.random() * 1000000000000).toString(); // generate 16 digit numbers;
    const transactions = generateTransaction();
    const resp = await User.updateOne(
      { userName },
      {
        $push: {
          cards: {
            cardNumber,
            cardType: "Credit",
            cvv: Math.floor(Math.random() * 1000).toString(),
            expiry: `${Math.floor(Math.random() * 12 + 1)}/${Math.floor(
              Math.random() * 7 + 24
            )}`,
            annualCharges,
            creditLimit,
            cardCategory,
            transactions,
          },
        },
      }
    );
    return resp;
  },
};

module.exports = applyCreditCard;
