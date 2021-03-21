import './App.css';
import * as actions from './Redux/Actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormPlayground from './components/FormPlayground';
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

      <FormPlayground {...props} />
      <ul>
      {
        props.tasks.length > 0 ?
          props.tasks.map(task => <li key={task.id}>{task.description}</li>) : <li>No tasks</li>
      }
      </ul>
      
    </div>
  );
}
const MapStateToProps = (state) => {
  console.log(state);
  return state;
}
const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}
export default connect(MapStateToProps, MapDispatchToProps)(App);
