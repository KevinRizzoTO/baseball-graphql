const constants = require("../../constants");
const { teamMapping, leagueMapping } = require("../maps");

const statcastKey = "team";

const internalFilterKey = constants.TEAM_FILTER;

const mapping = {
  ...teamMapping,
  ...leagueMapping
};

module.exports = (request, data) => {
  const requestValue = request[internalFilterKey];

  if (requestValue) {
    data[statcastKey] = mapping[requestValue];
  }

  return data;
};
