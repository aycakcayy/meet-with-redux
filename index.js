
import store from "./reduxStore";
import { increment, decrement } from "./reduxStore/counter";
import { addPost, addUpVote } from "./reduxStore/posts";
import { addTask, removeTask} from "./reduxStore/tasks";



store.subscribe(()=>console.log(store.getState()));

console.log(store);
store.dispatch(increment());
store.dispatch(increment(10));
store.dispatch(addTask(1,"Ayca"));
store.dispatch(removeTask(1));
store.dispatch(addPost(1, "deneme post bilgisi"));



store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));

console.log(store.getState().posts[0].votes);