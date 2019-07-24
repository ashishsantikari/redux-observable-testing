import { map, mapTo, filter, distinctUntilChanged } from 'rxjs/operators';
import { flash } from '../actions';
import { flashZeroCount } from '../actions/flash';

export default function isCounterZeroEpic(action$, state$){
    return state$.pipe(
        map(state => state.counter.value),
        distinctUntilChanged(),
        filter(count => count === 0),
        mapTo(flashZeroCount()),
    );
}