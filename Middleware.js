import { createStore, applyMiddleware } from 'redux';

const messageReducer = (state = '', action) => {
  if (action.type === 'NEW_MESSAGE') {
    return action.payload;
  } else {
    return state;
  }
}

// write your logger function here and apply your middleware.

const logger = storeAPI => next => action => {
  console.log(storeAPI.getState()); // this logs the contents of the store to the console
  const nextState = next(action); // this stores the result of the next(action) function call in nextState
  console.log(nextState);
  return nextState;
};

const store = createStore(messageReducer, '', applyMiddleware(logger)); // this applies middleware to the store

store.dispatch({ // this dispatches actions to the store
  type: 'NEW_MESSAGE',
  payload: 'I WROTE A MIDDLEWARE'
});
