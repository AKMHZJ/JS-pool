const filterKeys = (obj, callback) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => callback(key))
    );
  };
  
  const mapKeys = (obj, callback) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [callback(key), value])
    );
  };
  
  const reduceKeys = (obj, callback, initialValue) => {
    const keys = Object.keys(obj);
    return initialValue !== undefined
      ? keys.reduce(callback, initialValue)
      : keys.reduce(callback);
  };