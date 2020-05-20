import {
  ACTIONS,
  CLASSIFICATION_COLOR,
  CLASSIFICATION_TEXT
} from '../../../constants';

import {
  imc,
  pesoIdeal,
  rcq
} from '../../../formulas';

const INITIAL_STATE = {
  result: 0,
  classificationColor: '#fff',
  classificationText: '',
  enabledCategory: {
    category1: false,
    category2: true,
    category3: false,
  }
};

export default calculatorReducer = (state = INITIAL_STATE, actions) => {
  const { type, measures, enabledCategory } = actions;
  let result;

  switch (type) {
    case ACTIONS.SET_IMC:
      result = imc(measures);

      if (result < 16) {
        classificationColor = CLASSIFICATION_COLOR.SERIOUS;
        classificationText = CLASSIFICATION_TEXT.IMC.SEVERE_MALNUTRITION;
      } else
        if (result >= 16 && result < 17) {
          classificationColor = CLASSIFICATION_COLOR.MODERATE;
          classificationText = CLASSIFICATION_TEXT.IMC.MILD_MALNUTRITION;
        } else
          if (result >= 17 && result < 18.6) {
            classificationColor = CLASSIFICATION_COLOR.LIGHT;
            classificationText = CLASSIFICATION_TEXT.IMC.MILD_MALNUTRITION;
          } else
            if (result >= 18.6 && result < 25) {
              classificationColor = CLASSIFICATION_COLOR.OK;
              classificationText = CLASSIFICATION_TEXT.IMC.EUTROPHY;
            } else
              if (result >= 25 && result < 30) {
                classificationColor = CLASSIFICATION_COLOR.MODERATE;
                classificationText = CLASSIFICATION_TEXT.IMC.OVERWEIGHT;
              } else
                if (result >= 30) {
                  classificationColor = CLASSIFICATION_COLOR.SERIOUS;
                  classificationText = CLASSIFICATION_TEXT.IMC.OBESITY;
                }

      return {
        ...state,
        result: result,
        classificationColor,
        classificationText,
      }

    case ACTIONS.CLEAR_RESULT:
      return {
        ...state,
        result: 0,
        classificationColor: '#fff',
        classificationText: '',
        enabledCategory: {
          category1: false,
          category2: true,
          category3: false,
        }
      }

    case ACTIONS.SET_ENABLED_CATEGORY:
      return {
        ...state,
        enabledCategory,
      }

    case ACTIONS.SET_PESO_IDEAL:
      result = pesoIdeal(measures);

      return {
        ...state,
        result,
      }

    case ACTIONS.SET_RCQ:
      result = rcq(measures);

      return {
        ...state,
        result,
      }

    default:
      return state;
  }
};
