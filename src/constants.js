// FILTER PARAMS
module.exports.PITCH_TYPE = "pitchType";
module.exports.PITCH_RESULTS = "pitchResults";
module.exports.BATTER_BALL_LOCATION = "battedBallLocation";
module.exports.COUNT = "count";
module.exports.PLAYER_TYPE = "playerType";
module.exports.PITCHER_HANDEDNESS = "pitcherHandedness";
module.exports.GAME_DATE_GREATER_THAN = "gameDateGreaterThan";
module.exports.GAME_DATE_LESS_THAN = "gameDateLessThan";
module.exports.TEAM_FILTER = "team";
module.exports.OPPONENT_FILTER = "opponent";
module.exports.VENUE_FILTER = "venue";
module.exports.YEAR_OF_SEASON = "seasons";
module.exports.RUNNERS_ON = "runnersOn";
module.exports.STATCAST_FLAGS = "flags";
module.exports.METRIC_RANGE = "metricRanges";

// PITCH TYPES
module.exports.FOUR_SEAM_FASTBALL = "fourSeamFastball";
module.exports.TWO_SEAM_FASTBALL = "twoSeamFastball";
module.exports.CUTTER = "cutter";
module.exports.SPLITTER = "splitter";
module.exports.SINKER = "sinker";
module.exports.SLIDER = "slider";
module.exports.CHANGEUP = "changeup";
module.exports.CURVEBALL = "curveball";
module.exports.KNUCKLE_CURVE = "knuckleCurve";
module.exports.KNUCKLEBALL = "knuckleball";
module.exports.FORKBALL = "forkball";
module.exports.EEPHUS = "eephus";
module.exports.SCREWBALL = "screwball";
module.exports.INTENTIONAL_BALL = "intentionalBall";
module.exports.PITCHOUT = "pitchout";
module.exports.AUTOMATIC_BALL = "automaticBall";
module.exports.UNKNOWN_PITCH = "unknown";

// PITCH RESULTS
module.exports.PITCH_RESULT_AUTOMATIC_BALL = "automaticBall";
module.exports.PITCH_RESULT_BALL = "ball";
module.exports.PITCH_RESULT_BALL_IN_DIRT = "ballInDirt";
module.exports.PITCH_RESULT_CALLED_STRIKE = "calledStrike";
module.exports.PITCH_RESULT_FOUL = "foul";
module.exports.PITCH_RESULT_FOUL_BUNT = "foulBunt";
module.exports.PITCH_RESULT_FOUL_PITCHOUT = "foulPitchout";
module.exports.PITCH_RESULT_PITCHOUT = "pitchout";
module.exports.PITCH_RESULT_HIT_BY_PITCH = "hitByPitch";
module.exports.PITCH_RESULT_INTENTIONAL_BALL = "intentionalBall";
module.exports.PITCH_RESULT_IN_PLAY_OUT = "inPlayOut";
module.exports.PITCH_RESULT_IN_PLAY_NO_OUT = "inPlayNoOut";
module.exports.PITCH_RESULT_IN_PLAY_RUN = "inPlayRun";
module.exports.PITCH_RESULT_IN_PLAY_PITCHOUT_RUN = "inPlayPitchoutRun";
module.exports.PITCH_RESULT_MISSED_BUNT = "missedBunt";
module.exports.PITCH_RESULT_FOUL_TIP = "foulTip";
module.exports.PITCH_RESULT_SWINGING_PITCHOUT = "swingingPitchout";
module.exports.PITCH_RESULT_SWINGING_STRIKE = "swingingStrike";
module.exports.PITCH_RESULT_SWINGING_STRIKE_BLOCKED = "swingingStrikeBlocked";

// BATTED BALL LOCATIONS
module.exports.POSITION_PITCHER = "pitcher";
module.exports.POSITION_CATCHER = "catcher";
module.exports.POSITION_FIRST_BASE = "firstBase";
module.exports.POSITION_SECOND_BASE = "secondBase";
module.exports.POSITION_THIRD_BASE = "thirdBase";
module.exports.POSITION_SHORT_STOP = "shortStop";
module.exports.POSITION_LEFT_FIELD = "leftField";
module.exports.POSITION_CENTER_FIELD = "centerField";
module.exports.POSITION_RIGHT_FIELD = "rightField";

// COUNTS
module.exports.COUNT_0_0 = "noBallsNoStrikes";
module.exports.COUNT_0_1 = "noBallsOneStrike";
module.exports.COUNT_0_2 = "noBallsTwoStrikes";
module.exports.COUNT_1_0 = "oneBallNoStrikes";
module.exports.COUNT_1_1 = "oneBallOneStrike";
module.exports.COUNT_1_2 = "oneBallTwoStrikes";
module.exports.COUNT_2_0 = "twoBallsNoStrikes";
module.exports.COUNT_2_1 = "twoBallsOneStrike";
module.exports.COUNT_2_2 = "twoBallsTwoStrikes";
module.exports.COUNT_3_0 = "threeBallsNoStrikes";
module.exports.COUNT_3_1 = "threeBallsOneStrike";
module.exports.COUNT_3_2 = "threeBallsTwoStrikes";
module.exports.COUNT_AHEAD_IN_COUNT = "aheadInCount";
module.exports.COUNT_EVEN_COUNT = "evenCount";
module.exports.COUNT_BEHIND_IN_COUNT = "behindInCount";
module.exports.COUNT_TWO_STRIKES = "twoStrikes";
module.exports.COUNT_THREE_BALLS = "threeBalls";

// PLAYER TYPES
// not including already defined positions
module.exports.PLAYER_TYPE_BATTER = "batter";

// PITCHER HANDEDNESS
module.exports.PITCHER_HANDEDNESS_LEFT = "left";
module.exports.PITCHER_HANDEDNESS_RIGHT = "right";

// TEAMS
module.exports.LOS_ANGELES_ANGELS = "losAngelesAngels";
module.exports.HOUSTON_ASTROS = "houstonAstros";
module.exports.OAKLAND_ATHLETICS = "oaklandAthletics";
module.exports.TORONTO_BLUE_JAYS = "torontoBlueJays";
module.exports.ATLANTA_BRAVES = "atlantaBraves";
module.exports.MILWAUKEE_BREWERS = "milwaukeeBrewers";
module.exports.ST_LOUIS_CARDINALS = "stLouisCardinals";
module.exports.CHICAGO_CUBS = "chicagoCubs";
module.exports.ARIZONA_DIAMONDBACKS = "arizonaDiamondbacks";
module.exports.LOS_ANGELES_DODGERS = "losAngelesDodgers";
module.exports.SAN_FRANCISCO_GIANTS = "sanFranciscoGiants";
module.exports.CLEVELAND_INDIANS = "clevelandIndians";
module.exports.SEATTLE_MARINERS = "seattleMariners";
module.exports.MIAMI_MARLINS = "miamiMarlins";
module.exports.NEW_YORK_METS = "newYorkMets";
module.exports.WASHINGTON_NATIONALS = "washingtonNationals";
module.exports.BALTIMORE_ORIOLES = "baltimoreOrioles";
module.exports.PADRES = "padres";
module.exports.PHILADELPHIA_PHILLIES = "philadelphiaPhillies";
module.exports.PITTSBURGH_PIRATES = "pittsburghPirates";
module.exports.TEXAS_RANGERS = "texasRangers";
module.exports.TAMPA_BAY_RAYS = "tampaBayRays";
module.exports.BOSTON_RED_SOX = "bostonRedSox";
module.exports.CINCINNATI_REDS = "cincinnatiReds";
module.exports.COLORADO_ROCKIES = "coloradoRockies";
module.exports.KANSAS_CITY_ROYALS = "kansasCityRoyals";
module.exports.DETROIT_TIGERS = "detroitTigers";
module.exports.MINNESOTA_TWINS = "minnesotaTwins";
module.exports.CHICAGO_WHITE_SOX = "chicagoWhiteSox";
module.exports.NEW_YORK_YANKEES = "newYorkYankees";

// LEAGUES
module.exports.AMERICAN_LEAGUE = "americanLeague";
module.exports.NATIONAL_LEAGUE = "nationalLeague";

// RUNNERS ON STATCAST FILTER
module.exports.NO_RUNNERS = "noRunners";
module.exports.RUNNERS_IN_SCORING_POSITION = "runnersInScoringPosition";
module.exports.RUNNER_ON_BASE = "runnerOnBase";
module.exports.RUNNER_ON_FIRST = "runnerOnFirst";
module.exports.RUNNER_ON_SECOND = "runnerOnSecond";
module.exports.RUNNER_ON_THIRD = "runnerOnThird";
module.exports.RUNNER_NOT_ON_FIRST = "runnerNotOnFirst";
module.exports.RUNNER_NOT_ON_SECOND = "runnerNotOnSecond";
module.exports.RUNNER_NOT_ON_THIRD = "runnerNotOnThird";

// STATCAST FLAGS FILTER
module.exports.IS_PUTOUT = "isPutout";
module.exports.IS_ASSIST = "isAssist";
module.exports.IS_DEFLECTION = "isDeflection";
module.exports.IS_ERROR = "isError";
module.exports.IS_BASEHIT = "isBasehit";
module.exports.IS_HARD_HIT = "isHardHit";

// STATCAST METRIC TYPES
module.exports.STATCAST_METRIC_EXIT_VELOCITY = "exitVelocity";
module.exports.STATCAST_METRIC_PITCH_VELOCITY = "pitchVelocity";
module.exports.STATCAST_METRIC_LAUNCH_ANGLE = "launchAngle";
module.exports.STATCAST_METRIC_LAUNCH_DIRECTION = "launchDirection";
module.exports.STATCAST_METRIC_LAUNCH_DIRECTION_PULL_OPPO =
  "launchDirectionPullOppo";
module.exports.STATCAST_METRIC_DISTANCE_PROJECTED = "distanceProjected";
module.exports.STATCAST_METRIC_RELEASE_EXTENSION = "releaseExtension";
module.exports.STATCAST_METRIC_RELEASE_SPIN_RATE = "releaseSpinRate";
module.exports.STATCAST_METRIC_EFFECTIVE_SPEED = "effectiveSpeed";
module.exports.STATCAST_METRIC_PLATE_SPEED = "plateSpeed";
module.exports.STATCAST_METRIC_RELEASE_POSITION_X = "releasePositionX";
module.exports.STATCAST_METRIC_RELEASE_POSITION_Y = "releasePositionY";
module.exports.STATCAST_METRIC_RELEASE_POSITION_Z = "releasePositionZ";
module.exports.STATCAST_METRIC_PLATE_X = "plateX";
module.exports.STATCAST_METRIC_PLATE_Z = "plateZ";
module.exports.STATCAST_METRIC_RELATIVE_PLATE_X = "relativePlateX";
module.exports.STATCAST_METRIC_RELATIVE_PLATE_Z = "relativePlateZ";
module.exports.STATCAST_METRIC_EXPECTED_BA = "expectedBattingAverage";
module.exports.STATCAST_METRIC_EXPECTED_SLG = "expectedSlugging";
module.exports.STATCAST_METRIC_EXPECTED_BA = "expectedBattingAverage";
module.exports.STATCAST_METRIC_EXPECTED_ISO = "expectedIsolatedPower";
module.exports.STATCAST_METRIC_EXPECTED_WOBA = "expectedWeightedOnBaseAverage";
module.exports.STATCAST_METRIC_AT_BAT_NUMBER = "atBatNumber";
module.exports.STATCAST_METRIC_HOME_SCORE = "homeScore";
module.exports.STATCAST_METRIC_AWAY_SCORE = "awayScore";
module.exports.STATCAST_METRIC_HOME_SCORE_DIFF = "homeScoreDiff";
module.exports.STATCAST_METRIC_BAT_SCORE = "batScore";
module.exports.STATCAST_METRIC_FIELD_SCORE = "fieldScore";
module.exports.STATCAST_METRIC_BAT_SCORE_DIFF = "batScoreDiff";
module.exports.STATCAST_METRIC_HOME_WIN_EXP = "homeWinExpectation";
module.exports.STATCAST_METRIC_BAT_WIN_EXP = "batWinExpectation";
module.exports.STATCAST_METRIC_PITCH_NUMBER_THIS_GAME = "pitchNumberThisGame";
module.exports.STATCAST_METRIC_PITCH_NUMBER_THIS_TEAM = "pitchNumberThisTeam";
module.exports.STATCAST_METRIC_PITCH_NUMBER_THIS_PITCHER =
  "pitchNumberThisPitcher";
module.exports.STATCAST_METRIC_PITCH_NUMBER_THIS_BATTER =
  "pitchNumberThisBatter";
module.exports.STATCAST_METRIC_BATTER_GAME_NUMBER = "batterGameNumber";
module.exports.STATCAST_METRIC_PITCHER_GAME_NUMBER = "pitcherGameNumber";
module.exports.STATCAST_METRIC_PITCHER_TIMES_THROUGH_ORDER =
  "pitcherTimesThroughOrder";
module.exports.STATCAST_METRIC_BATTER_TIMES_THROUGH_ORDER =
  "batterTimesThroughOrder";
