const sequenciaA = [1, 3, 5, 7];
const sequenciaB = [2, 4, 8, 16, 32, 64];
const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
const sequenciaD = [4, 16, 36, 64];
const sequenciaE = [1, 1, 2, 3, 5, 8];
const sequenciaF = [2, 10, 12, 16, 17, 18, 19];

const ultimoElemento = (seq) => seq.at(-1);

const proximoA = (seq) => {
    return ultimoElemento(seq) + 2;
}

const proximoB = (seq) =>  {
    return ultimoElemento(seq) * 2;
}

const proximoC = (seq) =>  {
    return Math.pow(Math.sqrt(ultimoElemento(seq)) + 1, 2);
}

const proximoD = (seq) =>  {
    return Math.pow(Math.sqrt(ultimoElemento(seq)) + 2, 2);
}

const proximoE = (seq) =>  {
    return ultimoElemento(seq) + seq[seq.length - 2];
}

const proximoF = (seq) =>  {
    const ultimo = ultimoElemento(seq);
    return ultimo % 2 === 0 ? ultimo + 4 : ultimo + 1
}

const encontrarProximoElemento = (seq, funcaoProximo) => {
    seq.push(funcaoProximo(seq));
    return seq.at(-1);
}

console.log("Próximo elemento A:", encontrarProximoElemento(sequenciaA, proximoA));
console.log("Próximo elemento B:", encontrarProximoElemento(sequenciaB, proximoB));
console.log("Próximo elemento C:", encontrarProximoElemento(sequenciaC, proximoC));
console.log("Próximo elemento D:", encontrarProximoElemento(sequenciaD, proximoD));
console.log("Próximo elemento E:", encontrarProximoElemento(sequenciaE, proximoE));
console.log("Próximo elemento F:", encontrarProximoElemento(sequenciaF, proximoF));