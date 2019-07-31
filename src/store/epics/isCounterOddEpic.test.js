import { TestScheduler } from 'rxjs/testing';
import { flashOddCount } from '../actions/flash';
import isCounterOddEpic from './isCounterOddEpic';

jest.mock('../actions/flash');

let scheduler;
beforeEach(() => {
  scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
});

describe('Test IsCounterOddEpic', () => {
  test('Counter is odd, should emit flashOddCount action', () => {
    scheduler.run(({ hot, expectObservable }) => {
      const state$ = hot('-a-', {
        a: {
          counter: {
            value: 3,
          },
        },
      });
      const output$ = isCounterOddEpic(null, state$);
      expectObservable(output$).toBe('-e-', {
        e: flashOddCount(),
      });
    });
  });

  test('Counter is even, should not emit any action', () => {
    scheduler.run(({ hot, expectObservable }) => {
      const state$ = hot('-a-', {
        a: {
          counter: {
            value: 4,
          },
        },
      });
      const output$ = isCounterOddEpic(null, state$);
      expectObservable(output$).toBe('-');
    });
  });
});
