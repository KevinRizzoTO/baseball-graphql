const requireDir = require("require-dir");

const pipeline = Object.values(requireDir("./pipelines"));

module.exports = request => {
  const queryParamsObject = pipeline.reduce((acc, fn) => {
    return fn(request, acc);
  }, {});

  return queryParamsObject;
};
