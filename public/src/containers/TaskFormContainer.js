import TaskForm from '../components/TaskForm.js';
import { createTask, createTaskSuccess, createTaskFailure, resetNewTask } from '../actions/index';
import { validateTaskFields, validateTaskFieldsSuccess, validateTaskFieldsFailure, resetTaskFields } from '../actions/index';
import { fetchTasks, fetchTasksSuccess, fetchTasksFailure, resetActiveTasks } from '../actions/index';
import { reduxForm, reset} from 'redux-form';

//Client side validation
function validate(values) {
  const errors = {};

  if (!values.task || values.task.trim() === '') {
    errors.task = 'Enter task description';
  }
  if (!values.value || values.value.trim() === '' || values.value <= 0) {
    errors.value = 'Enter value greater than $0.00';
  }

  return errors;
}


//For instant async server validation
const asyncValidate = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(validateTaskFields(values))
    .then((response) => {
        let data = response.payload.data;
        //if status is not 200 or any one of the fields exist, then there is a field error
        if(response.payload.status != 200 || data.task || data.value) {
          //let other components know of error by updating the redux` state
          dispatch(validateTaskFieldsFailure(response.payload));
          reject(data); //this is for redux-form itself
         } else {
            //let other components know that everything is fine by updating the redux` state
          dispatch(validateTaskFieldsSuccess(response.payload)); //ps: this is same as dispatching RESET_POST_FIELDS
          resolve();//this is for redux-form itself
        }
      });
  });
};

//For any field errors upon submission (i.e. not instant check)
const validateAndCreateTask = (values, dispatch) => {
  return new Promise((resolve, reject) => {
   dispatch(createTask(values))
    .then((response) => {
        let data = response.payload.data;
        //if any one of these exist, then there is a field error
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(createTaskFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {
            //let other components know that everything is fine by updating the redux` state
          dispatch(createTaskSuccess(response.payload));
          resolve();//this is for redux-form itself
          dispatch(fetchTasks(values.child_Id)).then((data) =>
            {
              !data.error ? dispatch(fetchTasksSuccess(data.payload)) : dispatch(fetchTasksFailure(data.payload));
            })
          dispatch(resetTaskFields());
          dispatch(resetNewTask());
          dispatch(reset('TaskNewForm'));
        }
      });
  });
};



const mapDispatchToProps = (dispatch) => {
  return {
    createTask: validateAndCreateTask,
    resetMe: () =>{
      dispatch(resetNewTask());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    newTask: state.children.newTask,
    child_Id: ownProps.id
  };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'TaskNewForm',
  fields: ['task', 'value', 'child_Id'],
  asyncValidate,
  asyncBlurFields: ['task'],
  validate
}, mapStateToProps, mapDispatchToProps)(TaskForm);
