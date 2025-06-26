const vendas = [
  { cliente: "João", total: 100 },
  { cliente: "Maria", total: 200 },
  { cliente: "João", total: 150 },
  { cliente: "Pedro", total: 300 },
  { cliente: "Maria", total: 50 },
];

const somaPorCliente = vendas.reduce((acc, { cliente, total }) => {
  acc[cliente] = (acc[cliente] || 0) + total;
  return acc;
}, {});

console.log(somaPorCliente);

