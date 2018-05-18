const statcastResolver = require("./statcast/resolver");

module.exports = {
  Query: {
    statcast: async (root, args) => {
      const results = await statcastResolver(args);
      return results;
    }
  }
};
