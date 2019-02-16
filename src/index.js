import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './styles/basics.css';
import './styles/advanced.css';
import './styles/libraries.css';
import './styles/common.css';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
), document.getElementById('root'));

ReactDOM.render((
    <div>
    <ToastContainer
      newestOnTop={false}
      rtl={false}
      draggable
      pauseOnHover
      pauseOnVisibilityChange={false}
      closeOnClick
    />
    </div>
), document.getElementById('toastr'));

