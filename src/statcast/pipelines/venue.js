/*@flow*/
import * as constants from "../constants";
import { teamMapping, leagueMapping } from "../maps";
import type { StatCastFilter } from "../../schemaTypes.flow";
import type { StatCastSearch, StatCastMapping } from "../types.flow";

const statcastKey = "stadium";

const internalFilterKey: string = constants.VENUE_FILTER;

const mapping: StatCastMapping = {
  ...teamMapping,
  ...leagueMapping
};

export default (request: StatCastFilter, data: StatCastSearch) => {
  const requestValue: string | null = request[internalFilterKey];

  if (requestValue) {
    data[statcastKey] = mapping[requestValue];
  }

  return data;
};
