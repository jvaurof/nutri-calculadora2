export function imc(weight, height) {
  const result = weight / Math.pow(height, 2);
  return result.toFixed(2);
}

export function pesoIdeal(intendedImc, height) {
  const result = intendedImc * Math.pow(height, 2);
  return result.toFixed(2);
}
