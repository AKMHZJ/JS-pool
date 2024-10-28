const filterEntries = (cart, predicate) => {
  return Object.fromEntries(
    Object.entries(cart).filter(([k, v]) => predicate([k, v]))
  );
};

const mapEntries = (cart, mapper) => {
  return Object.fromEntries(
    Object.entries(cart).map(([k, v]) => mapper([k, v]))
  );
};

const reduceEntries = (cart, reducer, initialValue) => {
  return Object.entries(cart).reduce(
    (acc, entry) => reducer(acc, entry),
    initialValue
  );
};

const totalCalories = (cart) => {
  const total = reduceEntries(cart, (acc, [item, quantity]) => {
    const { calories } = nutritionDB[item];
    return acc + (calories * quantity) / 100;
  }, 0);
  
  return Math.round(total * 10) / 10;
};

const lowCarbs = (cart) => {
  return filterEntries(cart, ([item, quantity]) => {
    const { carbs } = nutritionDB[item];
    return (carbs * quantity) / 100 < 50;
  });
};

const cartTotal = (cart) => {
  return mapEntries(cart, ([item, quantity]) => {
    const nutrition = nutritionDB[item];
    const totalNutrition = {};
    for (const key in nutrition) {
      totalNutrition[key] = Math.round((nutrition[key] * quantity) / 100 * 1000) / 1000;
    }
    return [item, totalNutrition];
  });
};