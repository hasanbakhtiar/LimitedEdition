import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import photo from './img/img.jpeg'

class App extends React.Component{
    render(){
        return(
           <div>
             <h1>Hello</h1>
             <img src={photo} alt="" />
           </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));