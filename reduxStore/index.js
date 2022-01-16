import {combineReducers, createStore} from "redux";
import counterReducer from "./counter";
import tasksReducer from "./tasks";
import postsReducer from "./posts";


//reducer bilgilerini birleştirdi. combine etti.
const rootReducer = combineReducers({
    counter: counterReducer,
    tasks: tasksReducer,
    posts: postsReducer,
})

const store=createStore(rootReducer);

export default store 