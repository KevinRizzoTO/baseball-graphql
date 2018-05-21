/*@flow*/
import * as constants from "../../constants";
import { getArrayMappingFunction } from "../utils";

const statcastKey = "hfBBL";
const internalFilterKey = constants.BATTER_BALL_LOCATION;

const mapping = {
  [constants.POSITION_PITCHER]: "1",
  [constants.POSITION_CATCHER]: "2",
  [constants.POSITION_FIRST_BASE]: "3",
  [constants.POSITION_SECOND_BASE]: "4",
  [constants.POSITION_THIRD_BASE]: "5",
  [constants.POSITION_SHORT_STOP]: "6",
  [constants.POSITION_LEFT_FIELD]: "7",
  [constants.POSITION_CENTER_FIELD]: "8",
  [constants.POSITION_RIGHT_FIELD]: "9"
};

export default getArrayMappingFunction(internalFilterKey, statcastKey, mapping);
