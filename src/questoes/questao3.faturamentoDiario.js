const qtdVendasPorDiaNoAno = Array.from({length: 365}, (_, index) => 
  (index % 7 === 0) ? 0 : Number((Math.random() * 30000).toFixed(2)));

const { diasComVendas, menor, maior, soma, totalDias } = qtdVendasPorDiaNoAno.reduce((acc, venda, index) => {
  if (venda > 0) {
    acc.diasComVendas.push(venda);
    acc.menor = Math.min(acc.menor, venda);
    acc.maior = Math.max(acc.maior, venda);
    acc.soma += venda;
  }
  acc.totalDias++;
  return acc;
}, { diasComVendas: [], menor: Infinity, maior: -Infinity, soma: 0, totalDias: 0 });


const diasAcimaDaMedia = () => {
  const media = soma / diasComVendas.length;
  return diasComVendas.filter(valor => valor > media).length;
};

const formatarValorParaBRL = (valor) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor,
  )
}

console.log(`O menor valor de faturamento ocorrido em um dia do ano foi: ${formatarValorParaBRL(menor)}`);
console.log(`O maior valor de faturamento ocorrido em um dia do ano foi: ${formatarValorParaBRL(maior)}`);
console.log(`Número de dias em que o faturamento diário foi superior à média anual: ${diasAcimaDaMedia()}`);
