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
