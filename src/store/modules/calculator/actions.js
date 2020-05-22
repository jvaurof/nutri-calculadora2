import { ACTIONS } from '../../../constants';

export function setImc(measures) {
  return {
    type: ACTIONS.SET_IMC,
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

export function setPesoIdeal(measures) {
  return {
    type: ACTIONS.SET_PESO_IDEAL,
    measures,
  }
}

export function setRcq(measures) {
  return {
    type: ACTIONS.SET_RCQ,
    measures,
  }
}

export function setAlturaEstimada(measures) {
  return {
    type: ACTIONS.SET_ALTURA_ESTIMADA,
    measures,
  }
}
