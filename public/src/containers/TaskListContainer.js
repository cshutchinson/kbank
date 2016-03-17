import TaskList from '../components/TaskList.js';
import { fetchTasks, fetchTasksSuccess, fetchTasksFailure, resetActiveTasks } from '../actions/index';
import { connect } from 'react-redux';



function mapStateToProps(state, ownProps) {
  return { activeTasks: state.children.activeTasks, childId: ownProps.id };
}

const mapDispatchToProps = (dispatch) => {
  return {
  	 fetchTasks: (id) => {
    	dispatch(fetchTasks(id))
      	.then((data) =>
          {
            console.log('TaskListContainer dispatch(fetchTasks) call', data);
          	!data.error ? dispatch(fetchTasksSuccess(data.payload)) : dispatch(fetchTasksFailure(data.payload));
          })
  	 },
     resetMe: () =>{
        dispatch(resetActiveTasks());
     }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
