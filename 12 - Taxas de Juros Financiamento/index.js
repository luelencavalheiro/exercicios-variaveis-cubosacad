const capitalInicialEmprestado = 60000;
const numeroMesesFinanciamento = 24;
const montanteValorAPagar = 90000;
let taxaDeJuros = (Math.pow((montanteValorAPagar / capitalInicialEmprestado), numeroMesesFinanciamento)).toFixed(1);
console.log(`O seu financiamento de R$${capitalInicialEmprestado} reais teve uma taxa de juros de ${taxaDeJuros}%, pois após${numeroMesesFinanciamento} meses, você teve que pagar R$${montanteValorAPagar} reais`);