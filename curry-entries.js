const defaultCurry = (obj1) => (obj2) => {
    return { ...obj1, ...obj2 };
  };
  
  const mapCurry = (fn) => (obj) => {
    return Object.fromEntries(Object.entries(obj).map(fn));
  };
  
  const reduceCurry = (fn) => (obj, initialValue) => {
    return Object.entries(obj).reduce(fn, initialValue);
  };
  
  const filterCurry = (fn) => (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(fn));
  };

  
const reduceScore = reduceCurry((acc, [_, v]) => {
    return v.isForceUser ? acc + v.shootingScore + v.pilotingScore : acc;
  });
  
  const filterForce = filterCurry(([_, v]) => v.isForceUser && v.shootingScore >= 80);
  
  const mapAverage = mapCurry(([k, v]) => {
    const averageScore = (v.pilotingScore + v.shootingScore) / 2;
    return [k, { ...v, averageScore }];
  });
  