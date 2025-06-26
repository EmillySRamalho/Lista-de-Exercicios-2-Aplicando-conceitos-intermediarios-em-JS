const texto = "olá olá mundo mundo";
const palavras = texto.split(" ");
const palavrasUnicas = [];

for (let i = 0; i < palavras.length; i++) {
  const palavra = palavras[i];
  
  if (palavrasUnicas.indexOf(palavra) === -1) {
    palavrasUnicas.push(palavra);
  } else {
  }
}

console.log(palavrasUnicas);
