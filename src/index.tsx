import * as i18next from 'i18next';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import './config/firebase';

import App from './App';
import { initialiseAuthentication } from './auth/authentication.actions';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store/redux';

import * as common_en from './translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en
    }
  }
});

store.dispatch(initialiseAuthentication());

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
