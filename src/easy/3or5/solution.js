let sum = 0;
for (let index = 0; index < 1000; index++) {
  if (index % 5 === 0 || index % 3 === 0) {
    sum += index;
    continue;
  }
}
console.log(sum);
