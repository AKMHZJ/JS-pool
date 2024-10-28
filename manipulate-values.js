const filterValues = (obj, callback) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => callback(value, key, obj))
    );
  };
  
  const mapValues = (obj, callback) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, callback(value, key, obj)])
    );
  };
  
  const reduceValues = (obj, callback, initialValue) => {
    const values = Object.values(obj);
    return initialValue !== undefined
      ? values.reduce(callback, initialValue)
      : values.reduce(callback);
  };