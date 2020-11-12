export const arrayStar = function (rate) {
  let contador = 0;
  let arrayResul = [];
  let rateRound = Math.round(rate);
  for (let i = 1; i <= rateRound; i++) {
    arrayResul.push(contador + 1);
  }
  return arrayResul;
};

export const arrayNoStar = function (rate) {
  let contador = 0;
  let arrayResul = [];
  let rateRound = Math.round(rate);
  for (let i = 1; i <= 5 - rateRound; i++) {
    arrayResul.push(contador + 1);
  }
  return arrayResul;
};
