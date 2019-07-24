import {
  map, mapTo, filter, distinctUntilChanged, tap
} from 'rxjs/operators';
import { flashEvenCount } from '../actions/flash';

export default function isCounterEvenEpic(action$, state$) {
  return state$.pipe(
    map(state => state.counter.value),
    distinctUntilChanged(),
    filter(count => (count !== 0 && count % 2 === 0)),
    mapTo(flashEvenCount()),
  );
}
