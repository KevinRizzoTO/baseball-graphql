/*@flow*/
import type { StatCastFilter } from "../schemaTypes.flow";
import type { StatCastSearch } from "./types.flow";
import pipeline from "./pipelines";

export default (request: StatCastFilter): StatCastSearch => {
  const queryParamsObject = pipeline.reduce((acc, fn) => {
    return fn(request, acc);
  }, {});

  return queryParamsObject;
};
