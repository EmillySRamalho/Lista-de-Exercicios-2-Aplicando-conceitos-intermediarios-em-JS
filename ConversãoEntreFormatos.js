function paresParaObjeto(pares) {
  const obj = {};
  for (const [chave, valor] of pares) {
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

const pares = [['nome', 'Emilly'], ['idade', 25]];
console.log("Array de pares original:", pares);

const obj = paresParaObjeto(pares);
console.log("Convertido para objeto:", obj);

const novoPares = objetoParaPares(obj);
console.log("Objeto convertido novamente em pares:", novoPares);
