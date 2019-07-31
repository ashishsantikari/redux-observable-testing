import { TestScheduler } from 'rxjs/testing';
import { flashZeroCount } from '../actions/flash';
import isCounterZeroEpic from './isCounterZeroEpic';

jest.mock('../actions/flash');

let scheduler;
beforeEach(() => {
  scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
});

describe('Test IsCounterOddEpic', () => {
  test('Counter is zero, should emit flashZeroCount action', () => {
    scheduler.run(({ hot, expectObservable }) => {
      const state$ = hot('-a-', {
        a: {
          counter: {
            value: 0,
          },
        },
      });
      const output$ = isCounterZeroEpic(null, state$);
      expectObservable(output$).toBe('-e-', {
        e: flashZeroCount(),
      });
    });
  });

  test('Counter is non zero, should not emit any action', () => {
    scheduler.run(({ hot, expectObservable }) => {
      const state$ = hot('-a-', {
        a: {
          counter: {
            value: 2,
          },
        },
      });
      const output$ = isCounterZeroEpic(null, state$);
      expectObservable(output$).toBe('-');
    });
  });
});
