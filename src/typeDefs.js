const { teamsList, leaguesList, positionList } = require("./schemaLists");
const constants = require("./constants");

const typeDefs = `
  scalar Date

  type Player {
    player_name: String,
    pitches: Int
  }

  enum PitchType {
    # Fastball (4 seam)
    ${constants.FOUR_SEAM_FASTBALL}
    # Fastball (2 seam)
    ${constants.TWO_SEAM_FASTBALL}
    # Fastball (Cut)
    ${constants.CUTTER}
    # Fastball (Split-finger)
    ${constants.SPLITTER}
    # Sinker
    ${constants.SINKER}
    # Slider
    ${constants.SLIDER}
    # Changeup
    ${constants.CHANGEUP}
    # Curveball
    ${constants.CURVEBALL}
    # Knuckle Curve
    ${constants.KNUCKLE_CURVE}
    # Knuckleball
    ${constants.KNUCKLEBALL}
    # Forkball
    ${constants.FORKBALL}
    # Eephus
    ${constants.EEPHUS}
    # Screwball
    ${constants.SCREWBALL}
    # Intentional Ball
    ${constants.INTENTIONAL_BALL}
    # Pitchout
    ${constants.PITCHOUT}
    # Automatic Ball
    ${constants.AUTOMATIC_BALL}
    # Unknown
    ${constants.UNKNOWN_PITCH}
  }

  enum PitchResult {
    # Automatic Ball
    ${constants.PITCH_RESULT_AUTOMATIC_BALL}
    # Ball
    ${constants.PITCH_RESULT_BALL}
    # Ball In Dirt
    ${constants.PITCH_RESULT_BALL_IN_DIRT}
    # Called Strike
    ${constants.PITCH_RESULT_CALLED_STRIKE}
    # Foul
    ${constants.PITCH_RESULT_FOUL}
    # Foul Bunt
    ${constants.PITCH_RESULT_FOUL_BUNT}
    # Foul Pitchout
    ${constants.PITCH_RESULT_FOUL_PITCHOUT}
    # Pitchout
    ${constants.PITCH_RESULT_PITCHOUT}
    # Hit By Pitch
    ${constants.PITCH_RESULT_HIT_BY_PITCH}
    # Intentional Ball
    ${constants.PITCH_RESULT_INTENTIONAL_BALL}
    # In play, out(s)
    ${constants.PITCH_RESULT_IN_PLAY_OUT}
    # In play no out
    ${constants.PITCH_RESULT_IN_PLAY_NO_OUT}
    # In play, run(s)
    ${constants.PITCH_RESULT_IN_PLAY_RUN}
    # In play, pitchout run(s)
    ${constants.PITCH_RESULT_IN_PLAY_PITCHOUT_RUN}
    # Missed Bunt
    ${constants.PITCH_RESULT_MISSED_BUNT}
    # Foul Tip
    ${constants.PITCH_RESULT_FOUL_TIP}
    # Swinging pitchout
    ${constants.PITCH_RESULT_SWINGING_PITCHOUT}
    # Swinging Strike
    ${constants.PITCH_RESULT_SWINGING_STRIKE}
    # Swinging Strike (Blocked)
    ${constants.PITCH_RESULT_SWINGING_STRIKE_BLOCKED}
  }

  enum Count {
    # 0-0
    ${constants.COUNT_0_0}
    # 0-1
    ${constants.COUNT_0_1}
    # 0-2
    ${constants.COUNT_0_2}
    # 1-0
    ${constants.COUNT_1_0}
    # 1-1
    ${constants.COUNT_1_1}
    # 1-2
    ${constants.COUNT_1_2}
    # 2-0
    ${constants.COUNT_2_0}
    # 2-1
    ${constants.COUNT_2_1}
    # 2-2
    ${constants.COUNT_2_2}
    # 3-0
    ${constants.COUNT_3_0}
    # 3-1
    ${constants.COUNT_3_1}
    # 3-2
    ${constants.COUNT_3_2}
    # Ahead In Count (Hitter)
    ${constants.COUNT_AHEAD_IN_COUNT}
    # Even Count
    ${constants.COUNT_EVEN_COUNT}
    # Behind In Count (Hitter)
    ${constants.COUNT_BEHIND_IN_COUNT}
    # 2 Strikes
    ${constants.COUNT_TWO_STRIKES}
    # 3 Balls
    ${constants.COUNT_THREE_BALLS}
  }

  enum BattedBallLocation {
    ${positionList}
  }

  enum PlayerType {
    # Batter
    ${constants.PLAYER_TYPE_BATTER}
    ${positionList}
  }

  enum PitcherHandedness {
    # Left Handed
    ${constants.PITCHER_HANDEDNESS_LEFT}
    # Right Handed
    ${constants.PITCHER_HANDEDNESS_RIGHT}
  }

  enum Team {
    ${leaguesList}
    ${teamsList}
  }

  enum Opponent {
    ${leaguesList}
    ${teamsList}
  }

  enum Venue {
    ${teamsList}
  }

  enum RunnersOn {
    # No Runners
    ${constants.NO_RUNNERS}
    # RISP
    ${constants.RUNNERS_IN_SCORING_POSITION}
    # Runners On Base
    ${constants.RUNNER_ON_BASE}
    # Runner On 1st
    ${constants.RUNNER_ON_FIRST}
    # Runner On 2nd
    ${constants.RUNNER_ON_SECOND}
    # Runner On 3rd
    ${constants.RUNNER_ON_THIRD}
    # Runners Not On 1st
    ${constants.RUNNER_NOT_ON_FIRST}
    # Runners Not On 2nd
    ${constants.RUNNER_NOT_ON_SECOND}
    # Runners Not On 3rd
    ${constants.RUNNER_NOT_ON_THIRD}
  }

  enum StatCastFlag {
    # A putout occurred during the play
    ${constants.IS_PUTOUT}
    # An assist occurred during the play
    ${constants.IS_ASSIST}
    # A deflection occurred during the play
    ${constants.IS_DEFLECTION}
    # An error occurred during the play
    ${constants.IS_ERROR}
    # A base hit occurred during the play
    ${constants.IS_BASEHIT}
    # A ball was considered "hard hit" by Statcast during the play
    ${constants.IS_HARD_HIT}
  }

  enum StatcastMetricRangeTypes {
    # Exit Velocity
    ${constants.STATCAST_METRIC_EXIT_VELOCITY}
    # Pitch Velocity
    ${constants.STATCAST_METRIC_PITCH_VELOCITY}
    # Launch Angle
    ${constants.STATCAST_METRIC_LAUNCH_ANGLE}
    # Launch Direction
    ${constants.STATCAST_METRIC_LAUNCH_DIRECTION}
    # Launch Direction Pull/Oppo
    ${constants.STATCAST_METRIC_LAUNCH_DIRECTION_PULL_OPPO}
    # Distance Projected
    ${constants.STATCAST_METRIC_DISTANCE_PROJECTED}
    # Release Extension
    ${constants.STATCAST_METRIC_RELEASE_EXTENSION}
    # Release Spin Rate
    ${constants.STATCAST_METRIC_RELEASE_SPIN_RATE}
    # Effective Speed
    ${constants.STATCAST_METRIC_EFFECTIVE_SPEED}
    # Plate Speed
    ${constants.STATCAST_METRIC_PLATE_SPEED}
    # Release Position X (x0)
    ${constants.STATCAST_METRIC_RELEASE_POSITION_X}
    # Release Position Y (y0)
    ${constants.STATCAST_METRIC_RELEASE_POSITION_Y}
    # Release Position Z (z0)
    ${constants.STATCAST_METRIC_RELEASE_POSITION_Z}
    # Plate X (px)
    ${constants.STATCAST_METRIC_PLATE_X}
    # Plate Z (pz)
    ${constants.STATCAST_METRIC_PLATE_Z}
    # Relative Plate X
    ${constants.STATCAST_METRIC_RELATIVE_PLATE_X}
    # Relative Plate Z
    ${constants.STATCAST_METRIC_RELATIVE_PLATE_Z}
    # xBA based on Launch Speed/Angle
    ${constants.STATCAST_METRIC_EXPECTED_BA}
    # xSLG based on Launch Speed/Angle
    ${constants.STATCAST_METRIC_EXPECTED_SLG}
    # xISO based on Launch Speed/Angle
    ${constants.STATCAST_METRIC_EXPECTED_ISO}
    # xwOBA based on Launch Speed/Angle
    ${constants.STATCAST_METRIC_EXPECTED_WOBA}
    # At Bat Number
    ${constants.STATCAST_METRIC_AT_BAT_NUMBER}
    # Home Score
    ${constants.STATCAST_METRIC_HOME_SCORE}
    # Away Score
    ${constants.STATCAST_METRIC_AWAY_SCORE}
    # Home Score Diff
    ${constants.STATCAST_METRIC_HOME_SCORE_DIFF}
    # Bat Score
    ${constants.STATCAST_METRIC_BAT_SCORE}
    # Field Score
    ${constants.STATCAST_METRIC_FIELD_SCORE}
    # Bat Score Diff
    ${constants.STATCAST_METRIC_BAT_SCORE_DIFF}
    # Home Win Exp
    ${constants.STATCAST_METRIC_HOME_WIN_EXP}
    # Bat Win Exp
    ${constants.STATCAST_METRIC_BAT_WIN_EXP}
    # Pitch number this game
    ${constants.STATCAST_METRIC_PITCH_NUMBER_THIS_GAME}
    # Pitch number this team
    ${constants.STATCAST_METRIC_PITCH_NUMBER_THIS_TEAM}
    # Pitch number this pitcher
    ${constants.STATCAST_METRIC_PITCH_NUMBER_THIS_PITCHER}
    # Pitch number this batter
    ${constants.STATCAST_METRIC_PITCH_NUMBER_THIS_BATTER}
    # Batter game number
    ${constants.STATCAST_METRIC_BATTER_GAME_NUMBER}
    # Pitcher game number
    ${constants.STATCAST_METRIC_PITCHER_GAME_NUMBER}
    # Pitcher - times through order
    ${constants.STATCAST_METRIC_PITCHER_TIMES_THROUGH_ORDER}
    # Batter - times through order
    ${constants.STATCAST_METRIC_BATTER_TIMES_THROUGH_ORDER}
  }

  input MetricRange {
    # Type of metric to filter based on
    metric: StatcastMetricRangeTypes,
    # Filter events where metric range is greater than this amount,
    greaterThan: Int,
    # Filter events where metric range is less than this amount,
    lessThan: Int
  }

  input StatCastFilter {
    # Type of pitch thrown
    ${constants.PITCH_TYPE}: [PitchType],
    # Result of plate appearance
    ${constants.PITCH_RESULTS}: [PitchResult],
    # The location of balls hit into play
    ${constants.BATTER_BALL_LOCATION}: [BattedBallLocation],
    # The count of the at-bat
    ${constants.COUNT}: [Count]
    # Type of player to query by
    ${constants.PLAYER_TYPE}: PlayerType
    # Pitcher Handedness
    ${constants.PITCHER_HANDEDNESS}: PitcherHandedness
    # Game date greater than
    ${constants.GAME_DATE_GREATER_THAN}: String
    # Game date less than
    ${constants.GAME_DATE_LESS_THAN}: String
    # Team to filter based on
    ${constants.TEAM_FILTER}: Team
    # Opponent to filter based on
    ${constants.OPPONENT_FILTER}: Opponent
    # Venue where events occurred
    ${constants.VENUE_FILTER}: Venue
    # Season to filter events based on (2008 onwards)
    ${constants.YEAR_OF_SEASON}: [Int]
    # Runners on during the pitch event queried
    ${constants.RUNNERS_ON}: [RunnersOn]
    # Statcast flags set during plays, use to query for more specific events
    ${constants.STATCAST_FLAGS}: [StatCastFlag]
    # Possible metrics to filter queries based on
    ${constants.METRIC_RANGE}: [MetricRange]
  }

  type Query {
    statcast(filter: StatCastFilter): [Player]
  }
`;

module.exports = typeDefs;
