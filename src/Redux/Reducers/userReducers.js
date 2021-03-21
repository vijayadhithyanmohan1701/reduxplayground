import {FETCH_USERS} from '../Actions/actions';
const userReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_USERS:
            console.log(action);
            return {
                data: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;