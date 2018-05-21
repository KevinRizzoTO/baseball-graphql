/*@flow*/
import * as constants from "../../constants";
import type { StatCastFilter } from "../../schemaTypes.flow";
import type { StatCastSearch } from "../types.flow";

const filterKey = "game_date_lt";

export default (request: StatCastFilter, data: StatCastSearch) => {
  const requestValue = request[constants.GAME_DATE_LESS_THAN];

  if (requestValue) {
    data[filterKey] = requestValue;
  }

  return data;
};
