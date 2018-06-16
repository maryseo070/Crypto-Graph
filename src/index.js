import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './App_container';
import configureStore from './store/store';

let store = configureStore();

ReactDOM.render(<AppContainer store={ store }/>, document.getElementById('root'));
