import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootEpic from './epics';
import reducers from './reducers';

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, epicMiddleware)),
  );
  epicMiddleware.run(rootEpic);
  return store;
}
