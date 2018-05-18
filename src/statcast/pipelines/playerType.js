const constants = require("../../constants");

const filterKey = "player_type";

const mapping = {
  [constants.PLAYER_TYPE_BATTER]: "batter",
  [constants.POSITION_PITCHER]: "pitcher",
  [constants.POSITION_CATCHER]: "pos2_person_id",
  [constants.POSITION_FIRST_BASE]: "pos3_person_id",
  [constants.POSITION_SECOND_BASE]: "pos4_person_id",
  [constants.POSITION_THIRD_BASE]: "pos5_person_id",
  [constants.POSITION_SHORT_STOP]: "pos6_person_id",
  [constants.POSITION_LEFT_FIELD]: "pos7_person_id",
  [constants.POSITION_CENTER_FIELD]: "pos8_person_id",
  [constants.POSITION_RIGHT_FIELD]: "pos9_person_id"
};

module.exports = (request, data) => {
  const requestValue = request[constants.PLAYER_TYPE];

  if (requestValue) {
    data[filterKey] = mapping[requestValue];
  }

  return data;
};
