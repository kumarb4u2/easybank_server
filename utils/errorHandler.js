const errorName = {
  USER_ALREADY_EXISTS: "USER_ALREADY_EXISTS",
  SERVER_ERROR: "SERVER_ERROR",
  USERNAME_PASSWROD_INVALID: "USERNAME_PASSWROD_INVALID",
  INVALID_CARD_CATEGORY: "INVALID_CARD_CATEGORY",
  INCOME_NOT_SUFFICIENT_PLATINUM: "INCOME_NOT_SUFFICIENT_PLATINUM",
  INCOME_NOT_SUFFICIENT_GOLD: "INCOME_NOT_SUFFICIENT_GOLD",
  USER_NOT_FOUND: "USER_NOT_FOUND",
};

const errorType = {
  USER_ALREADY_EXISTS: {
    message: "User already exists.",
    statusCode: 403,
  },
  SERVER_ERROR: {
    message: "Server error.",
    statusCode: 500,
  },
  USERNAME_PASSWROD_INVALID: {
    message: "Username or password is incorrect.",
    statusCode: 401,
  },
  INVALID_CARD_CATEGORY: {
    message: "Card category is not valid.",
    statusCode: 400,
  },
  INCOME_NOT_SUFFICIENT_PLATINUM: {
    message: "Income should be at least 5 lacs for this category.",
    statusCode: 400,
  },
  INCOME_NOT_SUFFICIENT_GOLD: {
    message: "Income should be 2 to 5 lacs for this category.",
    statusCode: 400,
  },
  USER_NOT_FOUND: {
    message: "User not found.",
    statusCode: 404,
  },
};

const getErrorCode = (errorName) => {
  return errorType[errorName];
};

module.exports = { getErrorCode, errorName, errorType };
