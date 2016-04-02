import TransactionForm from '../components/TransactionForm.js';
import { createTransaction, createTransactionSuccess, createTransactionFailure, resetNewTransaction } from '../actions/index';
import { validateTransactionFields, validateTransactionFieldsSuccess, validateTransactionFieldsFailure, resetTransactionFields } from '../actions/index';
import { fetchTransactions, fetchTransactionsSuccess, fetchTransactionsFailure, resetTransactions } from '../actions/index';
import { reduxForm, reset} from 'redux-form';

//Client side validation
function validate(values) {
  const errors = {};

  if (!values.transaction || values.transaction.trim() === '') {
    errors.transaction = 'Select a transaction type.';
  }
  if (!values.amount || values.amount.trim() === '') {
    errors.amount = 'Enter an amount.';
  }
  if (values.transaction === 'Withdrawal' && values.amount>0){
    values.amount = -values.amount;
  }
  if (values.transaction === 'Deposit' && values.amount<=0){
    errors.amount = 'Deposit must be a value greater than $0.00';
  }
  if (values.amount == 0){
    errors.amount = 'Transaction must be greater than $0.00';
  }
  return errors;
}


//For instant async server validation
const asyncValidate = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(validateTransactionFields(values))
    .then((response) => {
        let data = response.payload.data;
        //if status is not 200 or any one of the fields exist, then there is a field error
        if(response.payload.status != 200 || data.transaction || data.amount) {
          //let other components know of error by updating the redux` state
          dispatch(validateTransactionFieldsFailure(response.payload));
          reject(data); //this is for redux-form itself
         } else {
            //let other components know that everything is fine by updating the redux` state
          dispatch(validateTransactionFieldsSuccess(response.payload)); //ps: this is same as dispatching RESET_POST_FIELDS
          resolve();//this is for redux-form itself
        }
      });
  });
};

//For any field errors upon submission (i.e. not instant check)
const validateAndCreateTransaction = (values, dispatch) => {
  return new Promise((resolve, reject) => {
   dispatch(createTransaction(values))
    .then((response) => {
        let data = response.payload.data;
        //if any one of these exist, then there is a field error
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(createTransactionFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {
            //let other components know that everything is fine by updating the redux` state
          dispatch(createTransactionSuccess(response.payload));
          resolve();//this is for redux-form itself
          dispatch(fetchTransactions(values.child_Id)).then((data) =>
            {
              !data.error ? dispatch(fetchTransactionsSuccess(data.payload)) : dispatch(fetchTransactionsFailure(data.payload));
            })
          dispatch(resetTransactions());
          dispatch(resetNewTransaction());
          dispatch(reset('TransactionNewForm'));
        }
      });
  });
};



const mapDispatchToProps = (dispatch) => {
  return {
    createTransaction: validateAndCreateTransaction,
    resetMe: () =>{
      dispatch(resetNewTransaction());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    newTransaction: state.children.newTransaction,
    child_Id: ownProps.id
  };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'TransactionNewForm',
  fields: ['transaction', 'amount', 'child_Id'],
  asyncValidate,
  asyncBlurFields: ['transaction'],
  validate
}, mapStateToProps, mapDispatchToProps)(TransactionForm);
