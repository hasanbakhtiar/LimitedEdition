import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './routers/AppRouter';
ReactDOM.render(<AppRouter />, document.querySelector("#root"));
