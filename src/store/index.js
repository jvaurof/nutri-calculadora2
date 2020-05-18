import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const enhancer = __DEV__ ? console.tron.createEnhancer() : null;

export default store = createStore(rootReducer, enhancer);
