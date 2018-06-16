import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './config/firebase';

import App from './App';
import { initAuthRedirect } from './auth/authentication.service';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store/redux';

initAuthRedirect();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
