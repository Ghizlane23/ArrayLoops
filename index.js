//Question 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Question 2:

for (let i = 20; i > 0; i--) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Question 3:

let count = 1;
let sum = 0;
while (count <= 100) {
  sum = sum + count;
  count++;
}
console.log(sum);

//Question 4:
const n = [1, 2, 3, 4, 5, 10];
let sum1 = 0;

for (let i = 0; i < n.length; i++) {
  sum1 = sum1 + n[i];
}
console.log(sum1);
