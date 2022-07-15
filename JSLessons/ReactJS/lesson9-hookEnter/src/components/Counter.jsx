import React,{ useState }  from "react";

const App = () => {
  const [deyer, hadise] = useState(0);
  const azalt = () => {
    if (deyer > 0) {
      hadise(deyer - 1);
    }
  };

  const artir = () => {
    hadise(deyer + 1);
  };
  return (
    <div className="container mt-5">
      <button className="btn btn-danger" onClick={azalt}>
        -
      </button>
      <span className="mx-3">{deyer}</span>
      <button className="btn btn-success" onClick={artir}>
        +
      </button>
    </div>

    // <div className='container mt-5'>
    // <button className='btn btn-danger' onClick={()=>{if (deyer > 0) {
    //     hadise(deyer-1)
    // }}}>-</button>
    // <span className='mx-3'>{deyer}</span>
    // <button className='btn btn-success' onClick={()=>{hadise(deyer+1)}}>+</button>
    // </div>
  );
};

export default App;
