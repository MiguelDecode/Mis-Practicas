/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
0, 1, 1, 2, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. */


/* const fibonacci = [0, 1];
let i = 2;
let suma = 0;

while (suma < 4000000) {
  suma = fibonacci[i - 2] + fibonacci[i - 1];
  fibonacci.push(suma);
  i++;
}

console.log(fibonacci); */

const fibonacci = [0, 1];
let i = 2;
let suma = 0;

while (suma < 4000000) {
  suma = fibonacci[i - 2] + fibonacci[i - 1];
  if(suma < 4000000) {
    fibonacci.push(suma);
    i++;
  }
}

console.log(fibonacci);