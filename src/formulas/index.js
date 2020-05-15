export default (measures, formula) => {
  switch (formula) {
    case 'imc':
      return imc(measures);

    case 'peso ideal':
      return pesoIdeal(measures);
  }
}

function imc({ item1: weight, item2: height }) {



  const result = weight / Math.pow(height, 2);
  return result.toFixed(2);;
}

function pesoIdeal({ item1: intendedImc, item2: height }) {
  intendedImc = parseFloat(intendedImc);
  height = parseFloat(height);

  const result = intendedImc * Math.pow(height, 2);

  return result.toFixed(2);
}
