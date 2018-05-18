const constants = require("../../constants");
const { getArrayMappingFunction } = require("../utils");

const statcastKey = "hfRO";
const internalFilterKey = constants.RUNNERS_ON;

const mapping = {
  [constants.NO_RUNNERS]: "0",
  [constants.RUNNERS_IN_SCORING_POSITION]: "5",
  [constants.RUNNER_ON_BASE]: "4",
  [constants.RUNNER_ON_FIRST]: "1",
  [constants.RUNNER_ON_SECOND]: "2",
  [constants.RUNNER_ON_THIRD]: "3",
  [constants.RUNNER_NOT_ON_FIRST]: "6",
  [constants.RUNNER_NOT_ON_SECOND]: "7",
  [constants.RUNNER_NOT_ON_THIRD]: "8"
};

module.exports = getArrayMappingFunction(
  internalFilterKey,
  statcastKey,
  mapping
);
