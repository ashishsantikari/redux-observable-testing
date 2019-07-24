import {
  map, mapTo, filter, distinctUntilChanged,
} from 'rxjs/operators';
import { flashEvenCount } from 'store/actions/flash';

const isCounterEvenEpic = (action$, state$) => state$
  .pipe(
    map(state => state.counter.value),
    distinctUntilChanged(),
    filter(count => (count !== 0 && count % 2 === 0)),
    mapTo(flashEvenCount()),
  );

export default isCounterEvenEpic;
