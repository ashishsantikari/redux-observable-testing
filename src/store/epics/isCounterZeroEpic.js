import {
  map, mapTo, filter, distinctUntilChanged,
} from 'rxjs/operators';
import { flashZeroCount } from 'store/actions/flash';

const isCounterZeroEpic = (action$, state$) => state$.pipe(
  map(state => state.counter.value),
  distinctUntilChanged(),
  filter(count => count === 0),
  mapTo(flashZeroCount()),
);

export default isCounterZeroEpic;
