import { combineEpics } from 'redux-observable';
import isCounterEvenEpic from './isCounterEvenEpic';
import isCounterOddEpic from './isCounterOddEpic';
import isCounterZeroEpic from './isCounterZeroEpic';

const rootEpic = combineEpics(
  isCounterEvenEpic,
  isCounterOddEpic,
  isCounterZeroEpic,
);

export default rootEpic;
