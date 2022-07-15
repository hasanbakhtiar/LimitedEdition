import React,{ useState }  from "react";
import Info from "./Info";


const App = () => {
 const [color,setColor] = useState('text-danger')
  return (
    <div className="container mt-5">
      <h1 className={color}>Hello</h1>
      <button onClick={()=>{setColor(color === 'text-danger' ? 'text-success':'text-danger')}}>action</button>
      <Info title="Salam" text="Test"/>
    </div>

  
  );
};

export default App;
