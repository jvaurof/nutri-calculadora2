export function imc({ item1: weight, item2: height }) {
  const result = weight / Math.pow(height, 2);
  return result.toFixed(2);
}

export function pesoIdeal({ item1: intendedImc, item2: height }) {
  const result = intendedImc * Math.pow(height, 2);
  return result.toFixed(2);
}
