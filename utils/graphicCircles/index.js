export const randomWithMinimumSpread = (minSpread = 30, maxValue = 360) => {
  const baseValue = Math.random() * (maxValue - minSpread);
  return baseValue + minSpread;
};

export const getRadius = (circle) => {
  return circle.clientWidth / 2;
};
