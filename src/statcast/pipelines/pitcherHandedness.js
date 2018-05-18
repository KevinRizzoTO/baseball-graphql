const constants = require("../../constants");

const filterKey = "pitcher_throws";

const mapping = {
  [constants.PITCHER_HANDEDNESS_LEFT]: "L",
  [constants.PITCHER_HANDEDNESS_RIGHT]: "R"
};

module.exports = (request, data) => {
  const requestValue = request[constants.PITCHER_HANDEDNESS];

  if (requestValue) {
    data[filterKey] = mapping[requestValue];
  }

  return data;
};
