let num = 266219;
let res =
  num
    .toString()
    .split('')
    .reduce(function (acc, el) {
      return acc * el;
    }) ** 3;
console.log(res.toString().split('').slice(0, 2).join(''));
