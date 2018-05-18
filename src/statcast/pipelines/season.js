const constants = require("../../constants");
const { getArrayMappingFunction } = require("../utils");

const statcastKey = "hfSea";
const internalFilterKey = constants.YEAR_OF_SEASON;

module.exports = getArrayMappingFunction(internalFilterKey, statcastKey);
