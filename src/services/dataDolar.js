export const fetchDolar = async () => {
  const response = await fetch('https://mindicador.cl/api')
  const result = await response.json()
  return result
}
