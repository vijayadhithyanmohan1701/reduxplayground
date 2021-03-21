export const UPDATE_MOVIES = "UPDATE_MOVIES";
export function updateMovies(){
    return{
        type: UPDATE_MOVIES,
        payload: {
            movieName: "TENET"
        }
    }
}

export const FETCH_USERS = 'FETCH_USERS';
export function fetchUsers(){
    return function(dispatch){
        return fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(res => dispatch({type:FETCH_USERS,payload:res.data}))

    }
}

export const ADD_TASK = 'ADD_TASK';
export function addTask(task){
    return{
        type: ADD_TASK,
        payload: task
    }
}