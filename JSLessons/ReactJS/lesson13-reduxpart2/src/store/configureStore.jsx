import {combineReducers, createStore} from 'redux';
import { blogReducer } from '../reducers/reducerBlog';
// Store Start
export default () => {
const store  = createStore(
    combineReducers({
        myreducer:blogReducer,
    })
)

return store;
};
// Store End
