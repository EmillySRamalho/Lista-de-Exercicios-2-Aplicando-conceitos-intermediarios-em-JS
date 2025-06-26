function ordenarNomesPorPreco(produtos) {
  return produtos
    .slice() 
    .sort((a, b) => a.preco - b.preco) 
    .map(produto => produto.nome);
}

const produtos = [
  { nome: "Batom", preco: 25.90 },
  { nome: "Máscara de Cílios", preco: 45.00 },
  { nome: "Base", preco: 60.50 },
  { nome: "Pó Compacto", preco: 35.75 },
  { nome: "Delineador", preco: 30.00 }
];
console.log(ordenarNomesPorPreco(produtos));