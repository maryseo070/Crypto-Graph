import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/store';
import Root from './components/root';
import * as d3 from 'd3';
import { scaleLinear,scaleTime } from 'd3-scale';


let store = configureStore();
window.getState = store.getState;

 ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
