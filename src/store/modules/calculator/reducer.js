import { produce } from 'immer';

import { imcClassification } from '../../../classification';

import { ACTIONS } from '../../../constants';

import * as Formulas from '../../../formulas';

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
  const { type } = actions;

  switch (type) {
    case ACTIONS.SET_IMC:
      return produce(state, draft => {
        const { measures } = actions;
        let result = Formulas.imc(measures);

        const { classificationColor, classificationText } = imcClassification(result);

        result = result.toFixed(2).toString().replace(".", ",");

        draft.result = result;
        draft.classificationColor = classificationColor;
        draft.classificationText = classificationText;
      });

    case ACTIONS.CLEAR_RESULT:
      return produce(state, draft => {
        draft.result = 0;
        draft.classificationColor = '#fff';
        draft.classificationText = '';
        draft.enabledCategory = {
          category1: false,
          category2: true,
          category3: false,
        }
      });

    case ACTIONS.SET_ENABLED_CATEGORY:
      return produce(state, draft => {
        const { enabledCategory } = actions;

        draft.enabledCategory = enabledCategory;
      });

    case ACTIONS.SET_PESO_IDEAL:
      return produce(state, draft => {
        const { measures } = actions;

        let result = Formulas.pesoIdeal(measures);
        result = result.toFixed(2).toString().replace(".", ",");

        draft.result = result;
        draft.classificationText = 'Kg';
      });

    case ACTIONS.SET_RCQ:
      return produce(state, draft => {
        const { measures } = actions;

        let result = Formulas.rcq(measures);
        result = result.toFixed(2).toString().replace(".", ",");

        draft.result = result;
      });

    case ACTIONS.SET_ALTURA_ESTIMADA:
      return produce(state, draft => {
        const { measures } = actions;

        let result = Formulas.alturaEstimada(measures, state.enabledCategory);
        result = result.toFixed(2).toString().replace(".", ",");

        draft.result = result;
        draft.classificationText = 'metros';
      });

    case ACTIONS.SET_ADEQUACAO_DE_PESO:
      return produce(state, draft => {
        const { measures } = actions;

        let result = Formulas.adequacaoDePeso(measures);
        result = result.toFixed(2).toString().replace(".", ",");

        draft.result = result;
        draft.classificationText = '%';
      });

    default:
      return state;
  }
};

