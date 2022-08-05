import {createStore} from 'redux';

// Bashangic deyer
const initialState = {
    count: 0
} 

// Store yaradilmasi ve daxilinde reducer olacaq
const store = createStore((state = initialState, action)=>{
    // Reducer start
    switch (action.type) {
        case "INCREMENT":
            
            const newvalue = typeof action.incrementBy === "number" ? action.incrementBy :1;
        return {
            count: state.count + newvalue
        }
        case "DECREMENT":
            return {
                count: state.count - 1
            }

        case "RESET":
            return {
                count: 0
            }    
    
        default:
            return{
                count:state.count
            };
    }
    // Reducer end
    
})
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch({
    type:"INCREMENT",
    incrementBy:10
})
store.dispatch({
    type:"INCREMENT"
})

store.dispatch({
    type:"RESET"
})

store.dispatch({
    type:"DECREMENT"
})








