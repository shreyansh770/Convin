import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import {  Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { userReducer } from './redux/reducers';


let store = createStore(userReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store ={store}>
    <App />
    </Provider>

);

