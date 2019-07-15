export const INCREMENT_COUNT = 'INCREMENT';
export const DECREMENT_COUNT = 'DECREMENT';

//action creaters
function increment() {
    console.log("increment");
    return { type: INCREMENT_COUNT };
}

function decrement() {
    return { type: DECREMENT_COUNT };
}


//action dispatchers
export function incrementCount(){
    return function(dispatch){
        dispatch(increment());
    }
}

export function decrementCount(){
    return function(dispatch){
        dispatch(decrement());
    }
}