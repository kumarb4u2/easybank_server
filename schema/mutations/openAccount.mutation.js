const { GraphQLString } = require("graphql");
const { default: mongoose } = require("mongoose");
const UserType = require("../../types/user.type");
const generateTransaction = require("../../utils/transactionGenerator");
const User = mongoose.model("user");

const openAccount = {
  type: UserType,
  args: {
    userName: { type: GraphQLString },
    accountType: { type: GraphQLString },
  },
  resolve: async (parentValue, { userName, accountType }) => {
    const accountNumber = Math.floor(Math.random() * 100000000).toString();
    const cardNumber = Math.floor(Math.random() * 1000000000000).toString(); // generate 16 digit numbers;
    const transactions = generateTransaction();
    const resp = await User.updateOne(
      { userName },
      {
        $push: {
          accounts: {
            accountNumber,
            accountType,
            transactions,
          },
          cards: {
            cardNumber,
            cardType: "Debit",
            cvv: Math.floor(Math.random() * 1000).toString(),
            expiry: `${Math.floor(Math.random() * 12 + 1)}/${Math.floor(
              Math.random() * 7 + 24
            )}`,
            annualCharges: "150",
          },
        },
      }
    );
    return resp;
  },
};

module.exports = openAccount;
