import { combineReducers } from 'redux';

import counter from './counter';
import flash from './flash';

const rootReducer = combineReducers({
    counter,
    flash,
});

export default rootReducer;