import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import movieListReducer from './Reducers/movieListReducers';
import userReducer from './Reducers/userReducers';
import addTaskReducer from './Reducers/addTaskReducer';
import thunk from 'redux-thunk';
const middleware = [thunk];
const reducer = combineReducers({movies: movieListReducer, users: userReducer, tasks: addTaskReducer});

export const initialState = {
    tasks: [{id:0, description:"None"}],
    users: [],
    movies: {name: 'Terminator'}
};

const store = createStore(reducer,initialState, compose( applyMiddleware(...middleware)));

export default store;