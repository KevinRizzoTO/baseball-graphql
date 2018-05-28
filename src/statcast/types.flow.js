export type StatCastSearch = {
  [name: string]: string
};

export type StatCastMapping = {
  [name: string]: string
};

export type StatcastCsvExport = {
  pitches: string,
  player_id: string,
  player_name: string,
  total_pitches: string,
  pitch_percent: string,
  ba: string,
  iso: string,
  babip: string,
  slg: string,
  woba: string,
  xwoba: string,
  xba: string,
  hits: string,
  abs: string,
  launch_speed: string,
  launch_angle: string,
  spin_rate: string,
  velocity: string,
  effective_speed: string,
  whiffs: string,
  swings: string,
  takes: string,
  eff_min_vel: string,
  release_extension: string,
  pos3_int_start_distance: string,
  pos4_int_start_distance: string,
  pos5_int_start_distance: string,
  pos6_int_start_distance: string,
  pos7_int_start_distance: string,
  pos8_int_start_distance: string,
  pos9_int_start_distance: string
};

export type CsvHeadings = $Keys<StatcastCsvExport>;
