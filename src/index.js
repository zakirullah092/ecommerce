// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';

// Create a root element
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Updated method

// Render the App component
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
