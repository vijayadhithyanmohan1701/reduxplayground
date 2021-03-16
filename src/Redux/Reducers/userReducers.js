import {FETCH_USERS} from '../Actions/fetchUsers';

const userReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_USERS:
            return {
                data: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;