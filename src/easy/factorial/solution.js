function factorial(num) {
  let sum = 1;
  for (let index = num; index > 1; index--) {
    sum *= index;
  }
  console.log(sum);
}
factorial(5);
