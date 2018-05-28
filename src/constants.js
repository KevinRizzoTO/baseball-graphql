/*@flow*/
// FILTER PARAMS
export const PITCH_TYPE = "pitchType";
export const PITCH_RESULTS = "pitchResults";
export const BATTER_BALL_LOCATION = "battedBallLocation";
export const COUNT = "count";
export const PLAYER_TYPE = "playerType";
export const PITCHER_HANDEDNESS = "pitcherHandedness";
export const GAME_DATE_GREATER_THAN = "gameDateGreaterThan";
export const GAME_DATE_LESS_THAN = "gameDateLessThan";
export const TEAM_FILTER = "team";
export const OPPONENT_FILTER = "opponent";
export const VENUE_FILTER = "venue";
export const YEAR_OF_SEASON = "seasons";
export const RUNNERS_ON = "runnersOn";
export const STATCAST_FLAGS = "flags";
export const METRIC_RANGE = "metricRanges";

// PITCH TYPES
export const FOUR_SEAM_FASTBALL = "fourSeamFastball";
export const TWO_SEAM_FASTBALL = "twoSeamFastball";
export const CUTTER = "cutter";
export const SPLITTER = "splitter";
export const SINKER = "sinker";
export const SLIDER = "slider";
export const CHANGEUP = "changeup";
export const CURVEBALL = "curveball";
export const KNUCKLE_CURVE = "knuckleCurve";
export const KNUCKLEBALL = "knuckleball";
export const FORKBALL = "forkball";
export const EEPHUS = "eephus";
export const SCREWBALL = "screwball";
export const INTENTIONAL_BALL = "intentionalBall";
export const PITCHOUT = "pitchout";
export const AUTOMATIC_BALL = "automaticBall";
export const UNKNOWN_PITCH = "unknown";

// PITCH RESULTS
export const PITCH_RESULT_AUTOMATIC_BALL = "automaticBall";
export const PITCH_RESULT_BALL = "ball";
export const PITCH_RESULT_BALL_IN_DIRT = "ballInDirt";
export const PITCH_RESULT_CALLED_STRIKE = "calledStrike";
export const PITCH_RESULT_FOUL = "foul";
export const PITCH_RESULT_FOUL_BUNT = "foulBunt";
export const PITCH_RESULT_FOUL_PITCHOUT = "foulPitchout";
export const PITCH_RESULT_PITCHOUT = "pitchout";
export const PITCH_RESULT_HIT_BY_PITCH = "hitByPitch";
export const PITCH_RESULT_INTENTIONAL_BALL = "intentionalBall";
export const PITCH_RESULT_IN_PLAY_OUT = "inPlayOut";
export const PITCH_RESULT_IN_PLAY_NO_OUT = "inPlayNoOut";
export const PITCH_RESULT_IN_PLAY_RUN = "inPlayRun";
export const PITCH_RESULT_IN_PLAY_PITCHOUT_RUN = "inPlayPitchoutRun";
export const PITCH_RESULT_MISSED_BUNT = "missedBunt";
export const PITCH_RESULT_FOUL_TIP = "foulTip";
export const PITCH_RESULT_SWINGING_PITCHOUT = "swingingPitchout";
export const PITCH_RESULT_SWINGING_STRIKE = "swingingStrike";
export const PITCH_RESULT_SWINGING_STRIKE_BLOCKED = "swingingStrikeBlocked";

// BATTED BALL LOCATIONS
export const POSITION_PITCHER = "pitcher";
export const POSITION_CATCHER = "catcher";
export const POSITION_FIRST_BASE = "firstBase";
export const POSITION_SECOND_BASE = "secondBase";
export const POSITION_THIRD_BASE = "thirdBase";
export const POSITION_SHORT_STOP = "shortStop";
export const POSITION_LEFT_FIELD = "leftField";
export const POSITION_CENTER_FIELD = "centerField";
export const POSITION_RIGHT_FIELD = "rightField";

// COUNTS
export const COUNT_0_0 = "noBallsNoStrikes";
export const COUNT_0_1 = "noBallsOneStrike";
export const COUNT_0_2 = "noBallsTwoStrikes";
export const COUNT_1_0 = "oneBallNoStrikes";
export const COUNT_1_1 = "oneBallOneStrike";
export const COUNT_1_2 = "oneBallTwoStrikes";
export const COUNT_2_0 = "twoBallsNoStrikes";
export const COUNT_2_1 = "twoBallsOneStrike";
export const COUNT_2_2 = "twoBallsTwoStrikes";
export const COUNT_3_0 = "threeBallsNoStrikes";
export const COUNT_3_1 = "threeBallsOneStrike";
export const COUNT_3_2 = "threeBallsTwoStrikes";
export const COUNT_AHEAD_IN_COUNT = "aheadInCount";
export const COUNT_EVEN_COUNT = "evenCount";
export const COUNT_BEHIND_IN_COUNT = "behindInCount";
export const COUNT_TWO_STRIKES = "twoStrikes";
export const COUNT_THREE_BALLS = "threeBalls";

// PLAYER TYPES
// not including already defined positions
export const PLAYER_TYPE_BATTER = "batter";

// PITCHER HANDEDNESS
export const PITCHER_HANDEDNESS_LEFT = "left";
export const PITCHER_HANDEDNESS_RIGHT = "right";

// TEAMS
export const LOS_ANGELES_ANGELS = "losAngelesAngels";
export const HOUSTON_ASTROS = "houstonAstros";
export const OAKLAND_ATHLETICS = "oaklandAthletics";
export const TORONTO_BLUE_JAYS = "torontoBlueJays";
export const ATLANTA_BRAVES = "atlantaBraves";
export const MILWAUKEE_BREWERS = "milwaukeeBrewers";
export const ST_LOUIS_CARDINALS = "stLouisCardinals";
export const CHICAGO_CUBS = "chicagoCubs";
export const ARIZONA_DIAMONDBACKS = "arizonaDiamondbacks";
export const LOS_ANGELES_DODGERS = "losAngelesDodgers";
export const SAN_FRANCISCO_GIANTS = "sanFranciscoGiants";
export const CLEVELAND_INDIANS = "clevelandIndians";
export const SEATTLE_MARINERS = "seattleMariners";
export const MIAMI_MARLINS = "miamiMarlins";
export const NEW_YORK_METS = "newYorkMets";
export const WASHINGTON_NATIONALS = "washingtonNationals";
export const BALTIMORE_ORIOLES = "baltimoreOrioles";
export const SAN_DIEGO_PADRES = "sanDiegoPadres";
export const PHILADELPHIA_PHILLIES = "philadelphiaPhillies";
export const PITTSBURGH_PIRATES = "pittsburghPirates";
export const TEXAS_RANGERS = "texasRangers";
export const TAMPA_BAY_RAYS = "tampaBayRays";
export const BOSTON_RED_SOX = "bostonRedSox";
export const CINCINNATI_REDS = "cincinnatiReds";
export const COLORADO_ROCKIES = "coloradoRockies";
export const KANSAS_CITY_ROYALS = "kansasCityRoyals";
export const DETROIT_TIGERS = "detroitTigers";
export const MINNESOTA_TWINS = "minnesotaTwins";
export const CHICAGO_WHITE_SOX = "chicagoWhiteSox";
export const NEW_YORK_YANKEES = "newYorkYankees";

// LEAGUES
export const AMERICAN_LEAGUE = "americanLeague";
export const NATIONAL_LEAGUE = "nationalLeague";

// RUNNERS ON STATCAST FILTER
export const NO_RUNNERS = "noRunners";
export const RUNNERS_IN_SCORING_POSITION = "runnersInScoringPosition";
export const RUNNER_ON_BASE = "runnerOnBase";
export const RUNNER_ON_FIRST = "runnerOnFirst";
export const RUNNER_ON_SECOND = "runnerOnSecond";
export const RUNNER_ON_THIRD = "runnerOnThird";
export const RUNNER_NOT_ON_FIRST = "runnerNotOnFirst";
export const RUNNER_NOT_ON_SECOND = "runnerNotOnSecond";
export const RUNNER_NOT_ON_THIRD = "runnerNotOnThird";

// STATCAST FLAGS FILTER
export const IS_PUTOUT = "isPutout";
export const IS_ASSIST = "isAssist";
export const IS_DEFLECTION = "isDeflection";
export const IS_ERROR = "isError";
export const IS_BASEHIT = "isBasehit";
export const IS_HARD_HIT = "isHardHit";

// STATCAST METRIC TYPES
export const STATCAST_METRIC_EXIT_VELOCITY = "exitVelocity";
export const STATCAST_METRIC_PITCH_VELOCITY = "pitchVelocity";
export const STATCAST_METRIC_LAUNCH_ANGLE = "launchAngle";
export const STATCAST_METRIC_LAUNCH_DIRECTION = "launchDirection";
export const STATCAST_METRIC_LAUNCH_DIRECTION_PULL_OPPO =
  "launchDirectionPullOppo";
export const STATCAST_METRIC_DISTANCE_PROJECTED = "distanceProjected";
export const STATCAST_METRIC_RELEASE_EXTENSION = "releaseExtension";
export const STATCAST_METRIC_RELEASE_SPIN_RATE = "releaseSpinRate";
export const STATCAST_METRIC_EFFECTIVE_SPEED = "effectiveSpeed";
export const STATCAST_METRIC_PLATE_SPEED = "plateSpeed";
export const STATCAST_METRIC_RELEASE_POSITION_X = "releasePositionX";
export const STATCAST_METRIC_RELEASE_POSITION_Y = "releasePositionY";
export const STATCAST_METRIC_RELEASE_POSITION_Z = "releasePositionZ";
export const STATCAST_METRIC_PLATE_X = "plateX";
export const STATCAST_METRIC_PLATE_Z = "plateZ";
export const STATCAST_METRIC_RELATIVE_PLATE_X = "relativePlateX";
export const STATCAST_METRIC_RELATIVE_PLATE_Z = "relativePlateZ";
export const STATCAST_METRIC_EXPECTED_BA = "expectedBattingAverage";
export const STATCAST_METRIC_EXPECTED_SLG = "expectedSlugging";
export const STATCAST_METRIC_EXPECTED_ISO = "expectedIsolatedPower";
export const STATCAST_METRIC_EXPECTED_WOBA = "expectedWeightedOnBaseAverage";
export const STATCAST_METRIC_AT_BAT_NUMBER = "atBatNumber";
export const STATCAST_METRIC_HOME_SCORE = "homeScore";
export const STATCAST_METRIC_AWAY_SCORE = "awayScore";
export const STATCAST_METRIC_HOME_SCORE_DIFF = "homeScoreDiff";
export const STATCAST_METRIC_BAT_SCORE = "batScore";
export const STATCAST_METRIC_FIELD_SCORE = "fieldScore";
export const STATCAST_METRIC_BAT_SCORE_DIFF = "batScoreDiff";
export const STATCAST_METRIC_HOME_WIN_EXP = "homeWinExpectation";
export const STATCAST_METRIC_BAT_WIN_EXP = "batWinExpectation";
export const STATCAST_METRIC_PITCH_NUMBER_THIS_GAME = "pitchNumberThisGame";
export const STATCAST_METRIC_PITCH_NUMBER_THIS_TEAM = "pitchNumberThisTeam";
export const STATCAST_METRIC_PITCH_NUMBER_THIS_PITCHER =
  "pitchNumberThisPitcher";
export const STATCAST_METRIC_PITCH_NUMBER_THIS_BATTER = "pitchNumberThisBatter";
export const STATCAST_METRIC_BATTER_GAME_NUMBER = "batterGameNumber";
export const STATCAST_METRIC_PITCHER_GAME_NUMBER = "pitcherGameNumber";
export const STATCAST_METRIC_PITCHER_TIMES_THROUGH_ORDER =
  "pitcherTimesThroughOrder";
export const STATCAST_METRIC_BATTER_TIMES_THROUGH_ORDER =
  "batterTimesThroughOrder";

//CSV MAPPING
export const STATCAST_CSV_PITCHES = "numberOfPitches";
export const STATCAST_CSV_PLAYER_ID = "playerId";
export const STATCAST_CSV_PLAYER_NAME = "playerName";
export const STATCAST_CSV_TOTAL_PITCHES = "totalPitches";
export const STATCAST_CSV_PITCH_PERCENTAGE = "pitchPercentage";
export const STATCAST_CSV_WHIFFS = "whiffs";
export const STATCAST_CSV_SWINGS = "swings";
export const STATCAST_CSV_TAKES = "takes";

// STATS
export const BATTING_AVERAGE = "BA";
export const ISOLATED_POWER = "ISO";
export const BATTING_AVERAGE_ON_BALLS_IN_PLAY = "BABIP";
export const SLUGGING = "SLG";
export const WEIGHTED_ON_BASE_AVERAGE = "WOBA";
export const EXPECTED_WEIGHTED_ON_BASE_AVERAGE = "xWOBA";
export const EXPECTED_BATTING_AVERAGE = "xBA";
export const HITS = "hits";
export const AT_BATS = "ABs";
export const LAUNCH_SPEED = "launchSpeed";
export const LAUNCH_ANGLE = "launchAngle";
export const SPIN_RATE = "spinRate";
export const VELOCITY = "velocity";
export const EFFECTIVE_SPEED = "effectiveSpeed";
