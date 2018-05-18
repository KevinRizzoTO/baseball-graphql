const constants = require("../../constants");

const filterKey = "game_date_gt";

module.exports = (request, data) => {
  const requestValue = request[constants.GAME_DATE_GREATER_THAN];

  if (requestValue) {
    data[filterKey] = requestValue;
  }

  return data;
};
