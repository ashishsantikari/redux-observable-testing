import { TestScheduler } from 'rxjs/testing';
import { flashEvenCount } from '../actions/flash';
import isCounterEvenEpic from './isCounterEvenEpic';

jest.mock('../actions/flash');

let scheduler;
beforeEach(() => {
  scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
});

describe('Test IsCounterEvenEpic ', () => {
  test('Counter is even, should emit flashEvenCount action ', () => {
    scheduler.run(({ hot, expectObservable }) => {
      const state$ = hot('-a-', {
        a: {
          counter: {
            value: 4,
          },
        },
      });
      const output$ = isCounterEvenEpic(null, state$);
      expectObservable(output$).toBe('-e-', {
        e: flashEvenCount(),
      });
    });
  });

  test('Counter is odd, should not emit any action', () => {
    scheduler.run(({ hot, expectObservable }) => {
      const state$ = hot('-a-', {
        a: {
          counter: {
            value: 3,
          },
        },
      });
      const output$ = isCounterEvenEpic(null, state$);
      expectObservable(output$).toBe('-');
    });
  });
});
