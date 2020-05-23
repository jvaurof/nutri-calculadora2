import { ACTIONS, CALCULATOR_TYPES } from '../../../constants';

export function calculator(measures, calculatorType) {
  let type;

  switch (calculatorType) {
    case CALCULATOR_TYPES.IMC:
      type = ACTIONS.SET_IMC;
      break

    case CALCULATOR_TYPES.PESO_IDEAL:
      type = ACTIONS.SET_PESO_IDEAL;
      break

    case CALCULATOR_TYPES.RCQ:
      type = ACTIONS.SET_RCQ;
      break

    case CALCULATOR_TYPES.ALTURA_ESTIMADA:
      type = ACTIONS.SET_ALTURA_ESTIMADA;
      break

    case CALCULATOR_TYPES.ADEQUACAO_DE_PESO:
      type = ACTIONS.SET_ADEQUACAO_DE_PESO;
      break

    case CALCULATOR_TYPES.MUDANCA_DO_PESO:
      type = ACTIONS.SET_MUDANCA_DO_PEDO;
      break
  }

  return {
    type,
    measures,
  }
}

export function clearResult() {
  return {
    type: ACTIONS.CLEAR_RESULT,
  }
}

export function setEnabledCategory(enabledCategory) {
  return {
    type: ACTIONS.SET_ENABLED_CATEGORY,
    enabledCategory,
  }
}
