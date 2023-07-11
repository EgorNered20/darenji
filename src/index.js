import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/home/Home'
import styles from './assets/styles/global.css'
import Router from './Router'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
        <Router />
    </Suspense>
  </React.StrictMode>
);


