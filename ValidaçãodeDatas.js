function ehDataValida(dia, mes, ano){
  const data = new Date(ano, mes - 1, dia);
    return data.getFullYear() === ano &&
           data.getMonth() === mes - 1 &&
           data.getDate() === dia;
}

console.log(ehDataValida(31, 4, 2024)); 
console.log(ehDataValida(30, 4, 2024));
