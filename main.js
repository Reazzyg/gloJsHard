let arr = ['123', '456', '789', '101', '21312', '1233', '998798'];

arr.forEach((item, index) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});

for (let i = 0; i <= 100; i++) {
  let cnt = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      cnt++;
    }
  }
  if (cnt === 2) {
    console.log(`Число ${i}: Делители этого числа 1 и ${i}`);
  }
}
