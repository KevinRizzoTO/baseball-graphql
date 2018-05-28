/*@flow*/
import * as constants from "../../constants";
import type { StatCastFilter } from "../../schemaTypes.flow";
import type { StatCastSearch } from "../types.flow";

const filterKeyPrefix = "metric";

const internalFilterKey = constants.METRIC_RANGE;

const mapping = {
  [constants.STATCAST_METRIC_EXIT_VELOCITY]: "h_launch_speed",
  [constants.STATCAST_METRIC_PITCH_VELOCITY]: "api_p_release_speed",
  [constants.STATCAST_METRIC_LAUNCH_ANGLE]: "h_launch_angle",
  [constants.STATCAST_METRIC_LAUNCH_DIRECTION]: "h_launch_direction",
  [constants.STATCAST_METRIC_LAUNCH_DIRECTION_PULL_OPPO]:
    "h_launch_direction_pullopp",
  [constants.STATCAST_METRIC_DISTANCE_PROJECTED]: "api_h_distance_projected",
  [constants.STATCAST_METRIC_RELEASE_EXTENSION]: "api_p_release_extension",
  [constants.STATCAST_METRIC_RELEASE_SPIN_RATE]: "api_p_release_spin_rate",
  [constants.STATCAST_METRIC_EFFECTIVE_SPEED]: "api_p_effective_speed",
  [constants.STATCAST_METRIC_PLATE_SPEED]: "api_p_plate_speed",
  [constants.STATCAST_METRIC_RELEASE_POSITION_X]: "api_release_pos_x",
  [constants.STATCAST_METRIC_RELEASE_POSITION_Y]: "api_release_pos_y",
  [constants.STATCAST_METRIC_RELEASE_POSITION_Z]: "api_release_pos_z",
  [constants.STATCAST_METRIC_PLATE_X]: "api_plate_x",
  [constants.STATCAST_METRIC_PLATE_Z]: "api_plate_z",
  [constants.STATCAST_METRIC_RELATIVE_PLATE_X]: "api_relative_plate_x",
  [constants.STATCAST_METRIC_RELATIVE_PLATE_Z]: "api_relative_plate_z",
  [constants.STATCAST_METRIC_EXPECTED_BA]: "estimated_ba_using_speedangle",
  [constants.STATCAST_METRIC_EXPECTED_SLG]: "estimated_slg_using_speedangle",
  [constants.STATCAST_METRIC_EXPECTED_ISO]: "estimated_iso_using_speedangle",
  [constants.STATCAST_METRIC_EXPECTED_WOBA]: "estimated_woba_using_speedangle",
  [constants.STATCAST_METRIC_AT_BAT_NUMBER]: "at_bat_number",
  [constants.STATCAST_METRIC_HOME_SCORE]: "home_score",
  [constants.STATCAST_METRIC_AWAY_SCORE]: "away_score",
  [constants.STATCAST_METRIC_HOME_SCORE_DIFF]: "home_score_diff",
  [constants.STATCAST_METRIC_BAT_SCORE]: "bat_score",
  [constants.STATCAST_METRIC_FIELD_SCORE]: "fld_score",
  [constants.STATCAST_METRIC_BAT_SCORE_DIFF]: "bat_score_diff",
  [constants.STATCAST_METRIC_HOME_WIN_EXP]: "home_win_exp",
  [constants.STATCAST_METRIC_BAT_WIN_EXP]: "bat_win_exp",
  [constants.STATCAST_METRIC_PITCH_NUMBER_THIS_GAME]: "pitch_number_thisgame",
  [constants.STATCAST_METRIC_PITCH_NUMBER_THIS_TEAM]: "pitch_number_thisteam",
  [constants.STATCAST_METRIC_PITCH_NUMBER_THIS_PITCHER]:
    "pitch_number_thispitcher",
  [constants.STATCAST_METRIC_PITCH_NUMBER_THIS_BATTER]:
    "pitch_number_thisbatter",
  [constants.STATCAST_METRIC_BATTER_GAME_NUMBER]: "batter_gamenumber_thisyear",
  [constants.STATCAST_METRIC_PITCHER_GAME_NUMBER]:
    "pitcher_gamenumber_thisyear",
  [constants.STATCAST_METRIC_PITCHER_TIMES_THROUGH_ORDER]:
    "n_thruorder_pitcher",
  [constants.STATCAST_METRIC_BATTER_TIMES_THROUGH_ORDER]:
    "n_priorpa_thisgame_player_at_bat"
};

export default (request: StatCastFilter, data: StatCastSearch) => {
  const requestArray = request[internalFilterKey];

  if (requestArray) {
    requestArray.forEach((item, index) => {
      const metricName = `${filterKeyPrefix}_${index + 1}`;
      data[metricName] = mapping[item.metric];
      data[`${metricName}_gt`] = item.greaterThan
        ? item.greaterThan.toString()
        : "";
      data[`${metricName}_lt`] = item.lessThan ? item.lessThan.toString() : "";
    });
  }

  return data;
};
