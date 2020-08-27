import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { ToastContainer } from 'react-toastify';

import Layout from "./components/Layout"
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Route path = "/" component = {Layout} />
      </BrowserRouter>
      <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
