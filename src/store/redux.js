import { combineReducers, createStore} from 'redux';
import { currentUser } from './current-user.reducer';

export const reducers = combineReducers({
    currentUser
});

export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState,
    )
    return store;
};

export const store = configureStore();  
