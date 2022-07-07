export const priceCLP = (valorDollar, montoDollar) => {
  const result = Math.round(valorDollar * montoDollar)
  return result
}

export const priceSale = (valorDollar, montoDollar, sale) => {
  const percentResult = sale / 100
  const montoCLP = valorDollar * montoDollar
  const result = Math.round(montoCLP - montoCLP * percentResult)
  return result
}
