import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
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

