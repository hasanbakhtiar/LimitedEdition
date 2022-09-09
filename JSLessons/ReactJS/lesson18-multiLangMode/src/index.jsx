import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './sass/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './components/App';
ReactDOM.render(<Suspense fallback="loading"><App /></Suspense>, document.querySelector("#root"));