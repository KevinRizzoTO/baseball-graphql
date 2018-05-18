const parseArrayForQueryParams = arr => {
  return `${arr.join("|")}|`;
};

module.exports.parseArrayForQueryParams = parseArrayForQueryParams;

module.exports.getArrayMappingFunction = (
  internalFilterKey,
  statcastKey,
  mapping
) => {
  return (request, data) => {
    const requestArray = request[internalFilterKey];

    if (requestArray) {
      const parsedArray = requestArray.map(value => {
        return mapping ? mapping[value] : value;
      });

      data[statcastKey] = parseArrayForQueryParams(parsedArray);
    }

    return data;
  };
};
