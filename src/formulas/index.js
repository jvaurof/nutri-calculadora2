export function imc({ item1: weight, item2: height }) {
  const result = weight / Math.pow(height, 2);
  return result;
}

export function pesoIdeal({ item1: intendedImc, item2: height }) {
  const result = intendedImc * Math.pow(height, 2);
  return result;
}

export function rcq({ item1: waist, item2: hip }) {
  const result = waist / hip;
  return result;
}

export function alturaEstimada(
  { item1: age,
    item2: kneeHeight,
  },
  {
    category1: man,
  }) {
  let result;

  if (man)
    result = (64.19 - (0.04 * age) + (2.02 * kneeHeight)) / 100;
  else
    result = (84.88 - (0.24 * age) + (1.83 * kneeHeight)) / 100;

  return result;
}
