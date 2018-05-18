const constants = require("../../constants");
const { getArrayMappingFunction } = require("../utils");

const statcastKey = "hfPR";

const internalFilterKey = constants.PITCH_RESULTS;

const mapping = {
  [constants.PITCH_RESULT_AUTOMATIC_BALL]: "automatic\\.\\.ball",
  [constants.PITCH_RESULT_BALL]: "ball",
  [constants.PITCH_RESULT_BALL_IN_DIRT]: "blocked\\.\\.ball",
  [constants.PITCH_RESULT_BALL]: "blocked\\.\\.ball",
  [constants.PITCH_RESULT_CALLED_STRIKE]: "called\\.\\.strike",
  [constants.PITCH_RESULT_FOUL]: "foul",
  [constants.PITCH_RESULT_FOUL_BUNT]: "foul\\.\\.bunt",
  [constants.PITCH_RESULT_FOUL_PITCHOUT]: "foul\\.\\.pitchout",
  [constants.PITCH_RESULT_PITCHOUT]: "pitchout",
  [constants.PITCH_RESULT_HIT_BY_PITCH]: "hit\\.\\.by\\.\\.pitch",
  [constants.PITCH_RESULT_INTENTIONAL_BALL]: "intent\\.\\.ball",
  [constants.PITCH_RESULT_IN_PLAY_OUT]: "hit\\.\\.into\\.\\.play",
  [constants.PITCH_RESULT_IN_PLAY_NO_OUT]:
    "hit\\.\\.into\\.\\.play\\.\\.no\\.\\.out",
  [constants.PITCH_RESULT_IN_PLAY_RUN]: "hit\\.\\.into\\.\\.play\\.\\.score",
  [constants.PITCH_RESULT_IN_PLAY_PITCHOUT_RUN]:
    "pitchout\\.\\.hit\\.\\.into\\.\\.play\\.\\.score",
  [constants.PITCH_RESULT_MISSED_BUNT]: "missed\\.\\.bunt",
  [constants.PITCH_RESULT_FOUL_TIP]: "foul\\.\\.tip",
  [constants.PITCH_RESULT_SWINGING_PITCHOUT]: "swinging\\.\\.pitchout",
  [constants.PITCH_RESULT_SWINGING_STRIKE]: "swinging\\.\\.strike",
  [constants.PITCH_RESULT_SWINGING_STRIKE_BLOCKED]:
    "swinging\\.\\.strike\\.\\.blocked"
};

module.exports = getArrayMappingFunction(
  internalFilterKey,
  statcastKey,
  mapping
);
