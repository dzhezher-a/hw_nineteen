function pow(number, power) {
  return power === 1 ? number : number * pow(number, power - 1);
}

console.log(pow(2, 4));
