import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import movieListReducer from './Reducers/movieListReducers';
import userReducer from './Reducers/userReducers';
import thunk from 'redux-thunk';
const middleware = [thunk];
const reducer = combineReducers({movies: movieListReducer, users: userReducer});

const initialState = {
    users: [],
    movies: {name: 'Terminator'}
}

const store = createStore(reducer,initialState, compose( applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;