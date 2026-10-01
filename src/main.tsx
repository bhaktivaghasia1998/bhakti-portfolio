// The starting point. It finds <div id="root"> in index.html and puts the <App /> inside it.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// The "!" tells TypeScript: "trust me, this element exists" (it's in index.html).
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
