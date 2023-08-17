let valorCapital = 1.000;
let taxaDeJuros = 12.5;
let jurosEmDecimal = taxaDeJuros / 100;
let tempoFinanciamento = 5;
let calculoJuros = Math.pow(1 + jurosEmDecimal, tempoFinanciamento)
let montante = calculoJuros;

console.log("O valor:" + valorCapital + "investido em " + tempoFinanciamento + "meses, retornará em " + montante);