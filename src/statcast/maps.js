/*@flow*/
import * as constants from "../constants";

export const teamMapping = {
  [constants.LOS_ANGELES_ANGELS]: "LAA",
  [constants.HOUSTON_ASTROS]: "HOU",
  [constants.OAKLAND_ATHLETICS]: "OAK",
  [constants.TORONTO_BLUE_JAYS]: "TOR",
  [constants.ATLANTA_BRAVES]: "ATL",
  [constants.MILWAUKEE_BREWERS]: "MIL",
  [constants.ST_LOUIS_CARDINALS]: "STL",
  [constants.CHICAGO_CUBS]: "CHC",
  [constants.ARIZONA_DIAMONDBACKS]: "ARI",
  [constants.LOS_ANGELES_DODGERS]: "LAD",
  [constants.SAN_FRANCISCO_GIANTS]: "SF",
  [constants.CLEVELAND_INDIANS]: "CLE",
  [constants.SEATTLE_MARINERS]: "SEA",
  [constants.MIAMI_MARLINS]: "MIA",
  [constants.NEW_YORK_METS]: "NYM",
  [constants.WASHINGTON_NATIONALS]: "WSH",
  [constants.BALTIMORE_ORIOLES]: "BAL",
  [constants.SAN_DIEGO_PADRES]: "SD",
  [constants.PHILADELPHIA_PHILLIES]: "PHI",
  [constants.PITTSBURGH_PIRATES]: "PIT",
  [constants.TEXAS_RANGERS]: "TEX",
  [constants.TAMPA_BAY_RAYS]: "TB",
  [constants.BOSTON_RED_SOX]: "BOS",
  [constants.CINCINNATI_REDS]: "CIN",
  [constants.COLORADO_ROCKIES]: "COL",
  [constants.KANSAS_CITY_ROYALS]: "KC",
  [constants.DETROIT_TIGERS]: "DET",
  [constants.MINNESOTA_TWINS]: "MIN",
  [constants.CHICAGO_WHITE_SOX]: "CWS",
  [constants.NEW_YORK_YANKEES]: "NYY"
};

export const leagueMapping = {
  [constants.AMERICAN_LEAGUE]: "AL",
  [constants.NATIONAL_LEAGUE]: "NL"
};

export const csvHeaderMapping = {
  [constants.STATCAST_CSV_PLAYER_NAME]: "player_name",
  [constants.STATCAST_CSV_PITCHES]: "pitches",
  [constants.STATCAST_CSV_PLAYER_ID]: "player_id",
  [constants.STATCAST_CSV_TOTAL_PITCHES]: "total_pitches",
  [constants.STATCAST_CSV_PITCH_PERCENTAGE]: "pitch_percent",
  [constants.BATTING_AVERAGE]: "ba",
  [constants.ISOLATED_POWER]: "iso",
  [constants.BATTING_AVERAGE_ON_BALLS_IN_PLAY]: "babip",
  [constants.SLUGGING]: "slg",
  [constants.WEIGHTED_ON_BASE_AVERAGE]: "woba",
  [constants.EXPECTED_WEIGHTED_ON_BASE_AVERAGE]: "xwoba",
  [constants.EXPECTED_BATTING_AVERAGE]: "xba",
  [constants.HITS]: "hits",
  [constants.AT_BATS]: "abs",
  [constants.LAUNCH_SPEED]: "launch_speed",
  [constants.LAUNCH_ANGLE]: "launch_angle",
  [constants.SPIN_RATE]: "spin_rate",
  [constants.VELOCITY]: "velocity",
  [constants.EFFECTIVE_SPEED]: "effective_speed",
  [constants.STATCAST_CSV_WHIFFS]: "whiffs",
  [constants.STATCAST_CSV_SWINGS]: "swings",
  [constants.STATCAST_CSV_TAKES]: "takes"
};
