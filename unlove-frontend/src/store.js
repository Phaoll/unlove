import { createStore } from 'redux';
import rootReducer from './reducers';  // We'll create this later

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
