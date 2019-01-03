// Start up point for client side application
import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

ReactDom.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>, 

document.querySelector('#root'));