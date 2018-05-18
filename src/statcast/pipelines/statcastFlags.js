const constants = require("../../constants");
const { getArrayMappingFunction } = require("../utils");

const statcastKey = "hfFlag";
const internalFilterKey = constants.STATCAST_FLAGS;

const mapping = {
  [constants.IS_PUTOUT]: "touch1\\.\\.is\\.\\.putout",
  [constants.IS_ASSIST]: "touch1\\.\\.is\\.\\.assist",
  [constants.IS_DEFLECTION]: "touch1\\.\\.is\\.\\.deflection",
  [constants.IS_ERROR]: "touch1\\.\\.is\\.\\.error",
  [constants.IS_BASEHIT]: "is\\.\\.hit\\.\\.into\\.\\.play\\.\\.basehit",
  [constants.IS_HARD_HIT]: "is\\.\\.hit\\.\\.into\\.\\.play\\.\\.hardhit"
};

module.exports = getArrayMappingFunction(
  internalFilterKey,
  statcastKey,
  mapping
);
