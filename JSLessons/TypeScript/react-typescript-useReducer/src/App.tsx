// import { useReducer } from "react"

// type CounterState = {
//   count:number
// }

// type CounterAction = {
//   type:string,
//   payload:number
// }

// const initialState = {count:0}


// function reducer(state:CounterState,action:CounterAction){
//   switch (action.type) {
//     case 'increment':
//         return {count: state.count + action.payload}

//       case 'decrement':
//         return {count: state.count - action.payload}
      
//     default:
//       return{count:state.count}
//   }
// }

// const Counter=()=> {
//   const [state,dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="App">
//         <h1>Reducer</h1>
//         Count:{state.count}
//         <br />
//         <button onClick={()=>dispatch({type:'decrement',payload:10})}>-1</button>
//         <button onClick={()=>dispatch({type:'increment',payload:10})}>+1</button>
//     </div>
//   );
// }

import { useReducer } from "react"

type CounterState = {
  count:number
}

type UpdateAction = {
  type: 'increment' | 'decrement'
  payload:number
}

type ResetAction = {
  type: 'reset'
}

type CounterAction = UpdateAction | ResetAction;
const initialState = {count:0}


function reducer(state:CounterState,action:CounterAction){
  switch (action.type) {
    case 'increment':
        return {count: state.count + action.payload}

      case 'decrement':
        return {count: state.count - action.payload}

      case 'reset':
        return initialState
      
    default:
      return state
  }
}

const Counter=()=> {
  const [state,dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
        <h1>Reducer</h1>
        Count:{state.count}
        <br />
        <button onClick={()=>dispatch({type:'decrement',payload:10})}>-1</button>
        <button onClick={()=>dispatch({type:'increment',payload:10})}>+1</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  );
}






function App (){
  return(
    <Counter />
  )
}

export default App;
