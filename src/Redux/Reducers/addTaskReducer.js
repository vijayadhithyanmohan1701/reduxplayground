import {ADD_TASK} from '../Actions/actions';
import initialState from '../index';

const addTasks = (state = {initialState}, action) => {
    switch(action.type){
        case ADD_TASK:
            console.log([...state, action.payload]);
            /*return {
                todolist: [...state, action.payload]
            }*/
        default:
            return state;

    }
}
export default addTasks;