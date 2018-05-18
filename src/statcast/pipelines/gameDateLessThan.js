const constants = require("../../constants");

const filterKey = "game_date_lt";

module.exports = (request, data) => {
  const requestValue = request[constants.GAME_DATE_LESS_THAN];

  if (requestValue) {
    data[filterKey] = requestValue;
  }

  return data;
};
