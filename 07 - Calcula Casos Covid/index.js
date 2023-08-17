let populacao = 1000;
let potencialDeTrasmissao = 4;
let tempo = 7;
let pessoasInfectadas = populacao * Math.pow(potencialDeTrasmissao, tempo / 7);
console.log("Após" + tempo + "dias," + pessoasInfectadas + "estarão infectadas");