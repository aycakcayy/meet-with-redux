import {createStore} from "redux";

const initialState= {count:0};

//Action Types
const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";

//Action Creators
export const increment= (value=1) =>{
    return {//obje
    
    type: INCREMENT,
    payload: value,
    }
}

export const decrement= (value=1)=> ({
    type: DECREMENT,
    payload: value,
})

//Reducer
const counterReducer=(state =initialState, action)=> {
    switch(action.type){
        case INCREMENT:
            return {...state, count:state.count + action.payload} 
        case DECREMENT:
            return {...state, count:state.count - action.payload}   
            default:
            return state; 
    }
}
export default counterReducer;