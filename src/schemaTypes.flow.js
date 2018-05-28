/* @flow */

export type GraphQLResponseRoot = {
  data?: Query,
  errors?: Array<GraphQLResponseError>
};

export type GraphQLResponseError = {
  /** Required for all errors */
  message: string,
  locations?: Array<GraphQLResponseErrorLocation>,
  /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
  [propName: string]: any
};

export type GraphQLResponseErrorLocation = {
  line: number,
  column: number
};

export type Query = {
  statcast: Array<Player> | null
};

export type statcast_On_QueryArguments = {
  filter: StatCastFilter
};

export type StatCastFilter = {
  pitchType?: Array<PitchType> | null,
  pitchResults?: Array<PitchResult> | null,
  battedBallLocation?: Array<BattedBallLocation> | null,
  count?: Array<Count> | null,
  playerType?: PlayerType | null,
  pitcherHandedness?: PitcherHandedness | null,
  gameDateGreaterThan?: string | null,
  gameDateLessThan?: string | null,
  team?: Team | null,
  opponent?: Opponent | null,
  venue?: Venue | null,
  seasons?: Array<number> | null,
  runnersOn?: Array<RunnersOn> | null,
  flags?: Array<StatCastFlag> | null,
  metricRanges?: Array<MetricRange> | null
};

type PitchType =
  | "fourSeamFastball"
  | "twoSeamFastball"
  | "cutter"
  | "splitter"
  | "sinker"
  | "slider"
  | "changeup"
  | "curveball"
  | "knuckleCurve"
  | "knuckleball"
  | "forkball"
  | "eephus"
  | "screwball"
  | "intentionalBall"
  | "pitchout"
  | "automaticBall"
  | "unknown";

type PitchResult =
  | "automaticBall"
  | "ball"
  | "ballInDirt"
  | "calledStrike"
  | "foul"
  | "foulBunt"
  | "foulPitchout"
  | "pitchout"
  | "hitByPitch"
  | "intentionalBall"
  | "inPlayOut"
  | "inPlayNoOut"
  | "inPlayRun"
  | "inPlayPitchoutRun"
  | "missedBunt"
  | "foulTip"
  | "swingingPitchout"
  | "swingingStrike"
  | "swingingStrikeBlocked";

type BattedBallLocation =
  | "pitcher"
  | "catcher"
  | "firstBase"
  | "secondBase"
  | "thirdBase"
  | "shortStop"
  | "leftField"
  | "centerField"
  | "rightField";

type Count =
  | "noBallsNoStrikes"
  | "noBallsOneStrike"
  | "noBallsTwoStrikes"
  | "oneBallNoStrikes"
  | "oneBallOneStrike"
  | "oneBallTwoStrikes"
  | "twoBallsNoStrikes"
  | "twoBallsOneStrike"
  | "twoBallsTwoStrikes"
  | "threeBallsNoStrikes"
  | "threeBallsOneStrike"
  | "threeBallsTwoStrikes"
  | "aheadInCount"
  | "evenCount"
  | "behindInCount"
  | "twoStrikes"
  | "threeBalls";

type PlayerType =
  | "batter"
  | "pitcher"
  | "catcher"
  | "firstBase"
  | "secondBase"
  | "thirdBase"
  | "shortStop"
  | "leftField"
  | "centerField"
  | "rightField";

type PitcherHandedness = "left" | "right";

type Team =
  | "americanLeague"
  | "nationalLeague"
  | "losAngelesAngels"
  | "houstonAstros"
  | "oaklandAthletics"
  | "torontoBlueJays"
  | "atlantaBraves"
  | "milwaukeeBrewers"
  | "stLouisCardinals"
  | "chicagoCubs"
  | "arizonaDiamondbacks"
  | "losAngelesDodgers"
  | "sanFranciscoGiants"
  | "clevelandIndians"
  | "seattleMariners"
  | "miamiMarlins"
  | "newYorkMets"
  | "washingtonNationals"
  | "baltimoreOrioles"
  | "sanDiegoPadres"
  | "philadelphiaPhillies"
  | "pittsburghPirates"
  | "texasRangers"
  | "tampaBayRays"
  | "bostonRedSox"
  | "cincinnatiReds"
  | "coloradoRockies"
  | "kansasCityRoyals"
  | "detroitTigers"
  | "minnesotaTwins"
  | "chicagoWhiteSox"
  | "newYorkYankees";

type Opponent =
  | "americanLeague"
  | "nationalLeague"
  | "losAngelesAngels"
  | "houstonAstros"
  | "oaklandAthletics"
  | "torontoBlueJays"
  | "atlantaBraves"
  | "milwaukeeBrewers"
  | "stLouisCardinals"
  | "chicagoCubs"
  | "arizonaDiamondbacks"
  | "losAngelesDodgers"
  | "sanFranciscoGiants"
  | "clevelandIndians"
  | "seattleMariners"
  | "miamiMarlins"
  | "newYorkMets"
  | "washingtonNationals"
  | "baltimoreOrioles"
  | "sanDiegoPadres"
  | "philadelphiaPhillies"
  | "pittsburghPirates"
  | "texasRangers"
  | "tampaBayRays"
  | "bostonRedSox"
  | "cincinnatiReds"
  | "coloradoRockies"
  | "kansasCityRoyals"
  | "detroitTigers"
  | "minnesotaTwins"
  | "chicagoWhiteSox"
  | "newYorkYankees";

type Venue =
  | "losAngelesAngels"
  | "houstonAstros"
  | "oaklandAthletics"
  | "torontoBlueJays"
  | "atlantaBraves"
  | "milwaukeeBrewers"
  | "stLouisCardinals"
  | "chicagoCubs"
  | "arizonaDiamondbacks"
  | "losAngelesDodgers"
  | "sanFranciscoGiants"
  | "clevelandIndians"
  | "seattleMariners"
  | "miamiMarlins"
  | "newYorkMets"
  | "washingtonNationals"
  | "baltimoreOrioles"
  | "sanDiegoPadres"
  | "philadelphiaPhillies"
  | "pittsburghPirates"
  | "texasRangers"
  | "tampaBayRays"
  | "bostonRedSox"
  | "cincinnatiReds"
  | "coloradoRockies"
  | "kansasCityRoyals"
  | "detroitTigers"
  | "minnesotaTwins"
  | "chicagoWhiteSox"
  | "newYorkYankees";

type RunnersOn =
  | "noRunners"
  | "runnersInScoringPosition"
  | "runnerOnBase"
  | "runnerOnFirst"
  | "runnerOnSecond"
  | "runnerOnThird"
  | "runnerNotOnFirst"
  | "runnerNotOnSecond"
  | "runnerNotOnThird";

type StatCastFlag =
  | "isPutout"
  | "isAssist"
  | "isDeflection"
  | "isError"
  | "isBasehit"
  | "isHardHit";

export type MetricRange = {
  metric: StatcastMetricRangeTypes,
  greaterThan?: number | null,
  lessThan?: number | null
};

type StatcastMetricRangeTypes =
  | "exitVelocity"
  | "pitchVelocity"
  | "launchAngle"
  | "launchDirection"
  | "launchDirectionPullOppo"
  | "distanceProjected"
  | "releaseExtension"
  | "releaseSpinRate"
  | "effectiveSpeed"
  | "plateSpeed"
  | "releasePositionX"
  | "releasePositionY"
  | "releasePositionZ"
  | "plateX"
  | "plateZ"
  | "relativePlateX"
  | "relativePlateZ"
  | "expectedBattingAverage"
  | "expectedSlugging"
  | "expectedIsolatedPower"
  | "expectedWeightedOnBaseAverage"
  | "atBatNumber"
  | "homeScore"
  | "awayScore"
  | "homeScoreDiff"
  | "batScore"
  | "fieldScore"
  | "batScoreDiff"
  | "homeWinExpectation"
  | "batWinExpectation"
  | "pitchNumberThisGame"
  | "pitchNumberThisTeam"
  | "pitchNumberThisPitcher"
  | "pitchNumberThisBatter"
  | "batterGameNumber"
  | "pitcherGameNumber"
  | "pitcherTimesThroughOrder"
  | "batterTimesThroughOrder";

export type Player = {
  playerName: string | null,
  numberOfPitches: number | null,
  playerId: number | null,
  totalPitches: number | null,
  pitchPercentage: number | null,
  BA: number | null,
  ISO: number | null,
  BABIP: number | null,
  SLG: number | null,
  WOBA: number | null,
  xWOBA: number | null,
  xBA: number | null,
  hits: number | null,
  ABs: number | null,
  launchAngle: number | null,
  launchSpeed: number | null,
  spinRate: number | null,
  velocity: number | null,
  whiffs: number | null,
  swings: number | null,
  takes: number | null
};
