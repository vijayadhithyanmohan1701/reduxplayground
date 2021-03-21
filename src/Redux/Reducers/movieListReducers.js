import {UPDATE_MOVIES} from '../Actions/actions';
import initialState from '../index';

const movieListReducer = (state = {initialState}, action) => {
    switch(action.type){
        case UPDATE_MOVIES:
            console.log(state.name);
            return {
                name: state.name + " and " + action.payload.movieName
            }
        default:
            return state;

    }
}
export default movieListReducer;