import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { initFirebase } from './services/firebase';
import { initAuthRedirect } from './services/authentication';
import { Provider } from 'react-redux';
import { store } from './store/redux';
import './index.css';

initFirebase();
initAuthRedirect();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

// Log the initial state
// console.log(store.getState())

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // Dispatch some actions
// store.dispatch( setCurrentUser({name: 'bob', email: 'bob@bob.com'}));
// store.dispatch( setCurrentUser({name: 'jane', email: 'jane@bob.com'}));

// // Stop listening to state updates
// unsubscribe()