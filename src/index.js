import './rxjs-operators';
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
