import {UPDATE_MOVIES} from '../Actions/updateMovies';

const movieListReducer = (state = {name: 'Terminator 3'}, action) => {
    switch(action.type){
        case UPDATE_MOVIES:
            return {
                name: action.payload.movieName
            }
        default:
            return state;

    }
}
export default movieListReducer;