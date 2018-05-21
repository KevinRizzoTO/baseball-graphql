/*@flow*/
import * as constants from "../../constants";
import { getArrayMappingFunction } from "../utils";

const statcastKey = "hfSea";
const internalFilterKey = constants.YEAR_OF_SEASON;

export default getArrayMappingFunction(internalFilterKey, statcastKey);
