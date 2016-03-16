import ChildForm from '../components/ChildForm.js';
import { createChild, createChildSuccess, createChildFailure, resetNewChild, validateChildFields, validateChildFieldsSuccess, validateChildFieldsFailure } from '../actions/index';
import { reduxForm } from 'redux-form';

//Client side validation
function validate(values) {
  const errors = {};

  if (!values.name || values.name.trim() === '') {
    errors.name = 'Enter child name';
  }
  if (!values.image || values.image.trim() === '') {
    errors.image = 'Enter image';
  }

  return errors;
}

//For instant async server validation
const asyncValidate = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(validateChildFields(values))
    .then((response) => {
        let data = response.payload.data;
        //if status is not 200 or any one of the fields exist, then there is a field error
        if(response.payload.status != 200 || data.name || data.image) {
          //let other components know of error by updating the redux` state
          dispatch(validateChildFieldsFailure(response.payload));
          reject(data); //this is for redux-form itself
         } else {
            //let other components know that everything is fine by updating the redux` state
          dispatch(validateChildFieldsSuccess(response.payload)); //ps: this is same as dispatching RESET_POST_FIELDS
          resolve();//this is for redux-form itself
        }
      });
  });
};

//For any field errors upon submission (i.e. not instant check)
const validateAndCreateChild = (values, dispatch) => {
  return new Promise((resolve, reject) => {
   dispatch(createChild(values))
    .then((response) => {
        let data = response.payload.data;
        //if any one of these exist, then there is a field error
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(createChildFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {
            //let other components know that everything is fine by updating the redux` state
          dispatch(createChildSuccess(response.payload));
          resolve();//this is for redux-form itself
        }
      });
  });
};



const mapDispatchToProps = (dispatch) => {
  return {
   createChild: validateAndCreateChild,
   resetMe: () =>{
      dispatch(resetNewChild());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    newChild: state.children.newChild
  };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'ChildNewForm',
  fields: ['name', 'image'],
  asyncValidate,
  asyncBlurFields: ['name'],
  validate
}, mapStateToProps, mapDispatchToProps)(ChildForm);
