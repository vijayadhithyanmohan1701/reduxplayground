import './App.css';
import updateMovies from './Redux/Actions/updateMovies';
import fetchUsers from './Redux/Actions/fetchUsers';
import {connect} from 'react-redux';
function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>My movies</h1>
      <span>Your current movie is: {props.movies.name} </span>
      <br />
      <br/>
        {props.users.length === 0 ?
        <p>THERE ARE NO USERS</p> :
        props.users.data.map(user=> <p key={user.id}>{user.first_name} -    {user.email}</p>)}
        <button onClick={props.fetchUsers}>FETCH USERS</button>
    <br/>
      <button onClick = {props.updateMovies}>Update movie</button>
    </div>
  );
}
const MapStateToProps = (state) => {
  console.log(state);
  return state;
}
const MapDispatchToProps = (dispatch) => {
  return{
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers)
  }
}
export default connect(MapStateToProps, MapDispatchToProps)(App);
