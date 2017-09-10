import { combineReducers, createStore, compose} from 'redux';
import { persistState } from 'redux-devtools';

import { currentUser } from './current-user.reducer';
import Devtools from '../Devtools';

export const reducers = combineReducers({
    currentUser
});

const enhancer = compose(
  Devtools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState,
        enhancer
    )
    return store;
};

export const store = configureStore();  
