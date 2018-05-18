const constants = require("../../constants");
const { getArrayMappingFunction } = require("../utils");

const statcastKey = "hfC";
const internalFilterKey = constants.COUNT;

const mapping = {
  [constants.COUNT_0_0]: "00",
  [constants.COUNT_0_1]: "01",
  [constants.COUNT_0_2]: "02",
  [constants.COUNT_1_0]: "10",
  [constants.COUNT_1_1]: "11",
  [constants.COUNT_1_2]: "12",
  [constants.COUNT_2_0]: "20",
  [constants.COUNT_2_1]: "21",
  [constants.COUNT_2_2]: "22",
  [constants.COUNT_3_0]: "30",
  [constants.COUNT_3_1]: "31",
  [constants.COUNT_3_2]: "32",
  [constants.COUNT_AHEAD_IN_COUNT]: "ahead",
  [constants.COUNT_EVEN_COUNT]: "even",
  [constants.COUNT_BEHIND_IN_COUNT]: "behind",
  [constants.COUNT_TWO_STRIKES]: "2strikes",
  [constants.COUNT_THREE_BALLS]: "3balls"
};

module.exports = getArrayMappingFunction(
  internalFilterKey,
  statcastKey,
  mapping
);
