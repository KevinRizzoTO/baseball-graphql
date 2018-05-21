/*@flow*/
import * as constants from "../../constants";
import type { StatCastFilter } from "../../schemaTypes.flow";
import type { StatCastSearch } from "../types.flow";

const filterKey = "pitcher_throws";

const mapping = {
  [constants.PITCHER_HANDEDNESS_LEFT]: "L",
  [constants.PITCHER_HANDEDNESS_RIGHT]: "R"
};

export default (request: StatCastFilter, data: StatCastSearch) => {
  const requestValue = request[constants.PITCHER_HANDEDNESS];

  if (requestValue) {
    data[filterKey] = mapping[requestValue];
  }

  return data;
};
