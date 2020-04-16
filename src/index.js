import React from 'react';
import ReactDOM from 'react-dom';

// fonts
import './fonts/Roboto/Roboto-Black.ttf'
import './fonts/Roboto/Roboto-BlackItalic.ttf'
import './fonts/Roboto/Roboto-Bold.ttf'
import './fonts/Roboto/Roboto-BoldItalic.ttf'
import './fonts/Roboto/Roboto-Light.ttf'
import './fonts/Roboto/Roboto-LightItalic.ttf'
import './fonts/Roboto/Roboto-Medium.ttf'
import './fonts/Roboto/Roboto-MediumItalic.ttf'
import './fonts/Roboto/Roboto-Regular.ttf'
import './fonts/Roboto/Roboto-Italic.ttf'
import './fonts/Roboto/Roboto-Thin.ttf'
import './fonts/Roboto/Roboto-ThinItalic.ttf'


import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
