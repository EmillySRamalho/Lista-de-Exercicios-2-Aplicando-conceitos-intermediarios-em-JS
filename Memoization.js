function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = args.join(',');
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function soma(a, b) {
  console.log("Calculando...");
  return a + b;
}

const somaMemoizada = memoize(soma);

console.log(somaMemoizada(2, 3));
console.log(somaMemoizada(2, 3))