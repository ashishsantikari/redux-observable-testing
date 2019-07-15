import { counter as counterActions } from '../actions';

const initialState = {
    value: 0,
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case counterActions.INCREMENT_COUNT:
            return { value: state.value + 1 }
        case counterActions.DECREMENT_COUNT:
            return { value: state.value - 1 };
        default:
            return state;
    }
};

