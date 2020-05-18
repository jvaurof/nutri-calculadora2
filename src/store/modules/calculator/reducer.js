import { ACTIONS } from '../../../constants';
import { imc } from '../../../formulas'

const INITIAL_STATE = { result: 0 };

export default calculatorReducer = (state = INITIAL_STATE, actions) => {
  const { measures, type } = actions;

  switch (type) {
    case ACTIONS.SET_IMC:
      const { measure1: weight, measure2: height } = measures;
      const result = imc(weight, height);

      return {
        ...state,
        result: result
      }

    case ACTIONS.CLEAR_RESULT:
      return {
        ...state,
        result: 0,
      }

    default:
      return state
  }
};
