var x = new Function("x", "var sum = x++; console.log(sum); return x * x");
console.log(x(5));