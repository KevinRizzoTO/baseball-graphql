/*@flow*/
import type { statcast_On_QueryArguments, Player } from "./schemaTypes.flow.js";

import statcastResolver from "./statcast/resolver";

export default {
  Query: {
    statcast: async (
      root: any,
      args: statcast_On_QueryArguments
    ): Promise<Array<Player>> => {
      const results = await statcastResolver(args);
      return results;
    }
  }
};
