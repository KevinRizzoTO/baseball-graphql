/*@flow*/
import getCsv from "get-csv";
import queryParams from "query-string";
import type {
  statcast_On_QueryArguments,
  StatCastFilter,
  Player
} from "../schemaTypes.flow";
import type {
  StatcastCsvExport,
  CsvHeadings,
  StatCastSearch
} from "./types.flow";

import { csvHeaderMapping } from "./maps";
import paramsPipeline from "./paramsPipeline";

const defaultQueryParams =
  "all=true&hfPT=&hfAB=&hfBBT=&hfPR=&hfZ=&stadium=&hfBBL=&hfNewZones=&hfGT=R%7C=&hfSea=&hfSit=&player_type=pitcher&hfOuts=&opponent=&pitcher_throws=&batter_stands=&hfSA=&team=&position=&hfRO=&home_road=&hfFlag=&metric_1=&hfInn=&min_pitches=0&min_results=0&group_by=name&sort_col=pitches&player_event_sort=h_launch_speed&sort_order=desc&min_abs=0";

const getQueryParams = (filter: StatCastFilter): string => {
  const mapped: StatCastSearch = paramsPipeline(filter);

  return queryParams.stringify({
    ...queryParams.parse(defaultQueryParams),
    ...mapped
  });
};

const deserializeCsvResponse = (statcastObj: StatcastCsvExport) => {
  return Object.keys(statcastObj).reduce((acc, curr: CsvHeadings) => {
    const value: string = statcastObj[curr];

    const newKey = Object.keys(csvHeaderMapping).find(key => {
      return csvHeaderMapping[key] === curr;
    });

    if (newKey && value) {
      acc[newKey] = value;
    }

    return acc;
  }, {});
};

export default async ({
  filter
}: statcast_On_QueryArguments): Promise<Array<Player>> => {
  const params = getQueryParams(filter);

  console.log(params);

  const data: Array<StatcastCsvExport> = await getCsv(
    `https://baseballsavant.mlb.com/statcast_search/csv?${params}`
  );

  return data.map(deserializeCsvResponse);
};
