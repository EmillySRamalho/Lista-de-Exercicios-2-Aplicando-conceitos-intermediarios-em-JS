function fatorial(n) {
  if (n < 0) {
    throw new Error("Fatorial não definido para números negativos.");
  } else if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log(fatorial(5));
console.log(fatorial(0)); 
console.log(fatorial(-1));