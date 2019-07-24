export const INCREMENT_COUNT = 'INCREMENT';
export const DECREMENT_COUNT = 'DECREMENT';

// action creaters
const increment = () => ({ type: INCREMENT_COUNT });
const decrement = () => ({ type: DECREMENT_COUNT });

// action dispatchers
export const incrementCount = () => dispatch => dispatch(increment());
export const decrementCount = () => dispatch => dispatch(decrement());
