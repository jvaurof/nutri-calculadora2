export function imc({ item1: weight, item2: height }) {
  return weight / Math.pow(height, 2);
}

export function pesoIdeal({ item1: intendedImc, item2: height }) {
  return intendedImc * Math.pow(height, 2);
}

export function rcq({ item1: waist, item2: hip }) {
  return waist / hip;
}

export function alturaEstimada({ item1: age, item2: kneeHeight }, { category1: man }) {
  if (man)
    return (64.19 - (0.04 * age) + (2.02 * kneeHeight)) / 100;
  else
    return (84.88 - (0.24 * age) + (1.83 * kneeHeight)) / 100;
}

export function adequacaoDePeso({ item1: currentWeight, item2: idealWeight }) {
  return currentWeight / idealWeight * 100;
}
