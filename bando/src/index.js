import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home/App';
import Noticias from './pages/noticias/noticias';
import Login from './pages/login/login';
import reportWebVitals from './reportWebVitals';

import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

const rotas =(
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/login" element={<Noticias/>}/>
        <Route path="/noticias" element={<Login/>}/>
      </Routes>
    </div>
  </Router>

)

ReactDOM.createRoot(rotas, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
