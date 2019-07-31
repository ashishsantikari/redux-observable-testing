import {
  map, mapTo, filter, distinctUntilChanged,
} from 'rxjs/operators';
import { flashOddCount } from 'store/actions/flash';

export default function isCounterOddEpic(action$, state$) {
  return state$.pipe(
    map(state => state.counter.value),
    distinctUntilChanged(),
    filter(count => count % 2 !== 0),
    mapTo(flashOddCount()),
  );
}
