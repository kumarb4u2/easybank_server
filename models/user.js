const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  mobile: String,
  address: String,
  occupation: String,
  income: String,
  idProofNumber: String,
  userName: String,
  password: String,
  showWelcomeModal: Boolean,
  accounts: [
    {
      accountNumber: String,
      accountType: String,
      balance: String,
      transactions: [
        {
          id: String,
          date: Date,
          transactionType: String,
          amount: String,
          description: String,
          availableBalance: String,
        },
      ],
    },
  ],
  cards: [
    {
      cardNumber: String,
      cardType: String,
      cvv: String,
      expiry: String,
      creditLimit: String,
      annualCharges: String,
      transactions: [
        {
          id: String,
          date: Date,
          transactionType: String,
          amount: String,
          description: String,
          availableBalance: String,
        },
      ],
      cardCategory: String,
    },
  ],
});

mongoose.model("user", UserSchema);
