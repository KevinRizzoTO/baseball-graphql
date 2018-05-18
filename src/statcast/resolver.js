const getCsv = require("get-csv");
const queryParams = require("query-string");

const paramsPipeline = require("./paramsPipeline");

const defaultQueryParams =
  "all=true&hfPT=&hfAB=&hfBBT=&hfPR=&hfZ=&stadium=&hfBBL=&hfNewZones=&hfGT=R%7C=&hfSea=&hfSit=&player_type=pitcher&hfOuts=&opponent=&pitcher_throws=&batter_stands=&hfSA=&team=&position=&hfRO=&home_road=&hfFlag=&metric_1=&hfInn=&min_pitches=0&min_results=0&group_by=name&sort_col=pitches&player_event_sort=h_launch_speed&sort_order=desc&min_abs=0";

const getQueryParams = filter => {
  const mapped = paramsPipeline(filter);

  return queryParams.stringify({
    ...queryParams.parse(defaultQueryParams),
    ...mapped
  });
};

module.exports = ({ filter }) => {
  const params = getQueryParams(filter);

  console.log(params);

  return getCsv(`https://baseballsavant.mlb.com/statcast_search/csv?${params}`);
};
