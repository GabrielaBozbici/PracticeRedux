import registerServiceWorker from './registerServiceWorker';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase';

import { Provider } from 'react-redux';
import store from './redux/store';


import App from './App';
import './index.css';

let config = {
    apiKey: "AIzaSyC31OU1SGHffCGiFAsxoZBiUyhy-vvSQhs",
    authDomain: "funtodo-99fbc.firebaseapp.com",
    databaseURL: "https://funtodo-99fbc.firebaseio.com",
    projectId: "funtodo-99fbc",
    storageBucket: "funtodo-99fbc.appspot.com",
    messagingSenderId: "62520812624"
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseDb = firebaseApp.database();

const router = (
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(
    router,
    document.getElementById('root')
);
registerServiceWorker();


