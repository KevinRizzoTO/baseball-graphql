const constants = require("../../constants");
const { getArrayMappingFunction } = require("../utils");

const statcastKey = "hfPT";

const internalFilterKey = constants.PITCH_TYPE;

const mapping = {
  [constants.FOUR_SEAM_FASTBALL]: "FF",
  [constants.TWO_SEAM_FASTBALL]: "FT",
  [constants.CUTTER]: "FC",
  [constants.SPLITTER]: "FS",
  [constants.SINKER]: "SI",
  [constants.SLIDER]: "SL",
  [constants.CHANGEUP]: "CH",
  [constants.CURVEBALL]: "CU",
  [constants.KNUCKLE_CURVE]: "KC",
  [constants.KNUCKLEBALL]: "KN",
  [constants.FORKBALL]: "FO",
  [constants.EEPHUS]: "EP",
  [constants.SCREWBALL]: "SC",
  [constants.INTENTIONAL_BALL]: "IN",
  [constants.PITCHOUT]: "PO",
  [constants.AUTOMATIC_BALL]: "AB",
  [constants.UNKNOWN_PITCH]: "UN"
};

module.exports = getArrayMappingFunction(
  internalFilterKey,
  statcastKey,
  mapping
);
