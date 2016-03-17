import TaskList from '../components/TaskList.js';
import { fetchTasks, fetchTasksSuccess, fetchTasksFailure, resetActiveTasks } from '../actions/index';
import { toggleTask, toggleTaskSuccess, toggleTaskFailure } from '../actions/index'
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
          	!data.error ? dispatch(fetchTasksSuccess(data.payload)) : dispatch(fetchTasksFailure(data.payload));
          })
  	 },
     resetMe: () =>{
        dispatch(resetActiveTasks());
     },
     toggleTask: (id) => {
       dispatch(toggleTask(id))
        .then((data) =>
          {
            !data.error ? dispatch(toggleTaskSuccess(data.payload)) : dispatch(toggleTaskFailure(data.payload));
          })
     }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
