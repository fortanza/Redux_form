import { createStore } from 'redux';

const initialState = {
  email: null,
  firstname: null,
  lastname: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
console.log(initialState);
export default createStore(
  reducer,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable no-underscore-dangle */
);
