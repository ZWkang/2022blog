function pick(obj, keys) {
  return Object.keys(obj)
    .filter((key) => keys.includes(key))
    .reduce((o, n) => {
      o[n] = obj[n];
      return o;
    }, {});
}

export default pick;
