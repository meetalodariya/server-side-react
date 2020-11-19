import React from "react";
import ReactDOM from "react-dom";
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from "./Routes"

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes></Routes>
    </BrowserRouter>, document.querySelector('#root'))