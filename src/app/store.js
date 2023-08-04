import { combineReducers, createStore } from "redux";

import gridReducer from '../features/Grid/reducer';

const rootReducers = combineReducers({
  grid: gridReducer
});

let store = createStore(rootReducers);

export default store;