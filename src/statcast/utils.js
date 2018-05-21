/*@flow*/
import type { StatCastFilter } from "../schemaTypes.flow";
import type { StatCastSearch } from "./types.flow";

export const parseArrayForQueryParams = (arr: Array<String>) => {
  return `${arr.join("|")}|`;
};

export const getArrayMappingFunction = (
  internalFilterKey: string,
  statcastKey: string,
  mapping: any
) => {
  return (request: StatCastFilter, data: StatCastSearch) => {
    const requestArray = request[internalFilterKey];

    if (requestArray) {
      const parsedArray = requestArray.map(value => {
        return mapping ? mapping[value] : value;
      });

      data[statcastKey] = parseArrayForQueryParams(parsedArray);
    }

    return data;
  };
};
