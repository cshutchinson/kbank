import {
	FETCH_CHILDREN, FETCH_CHILDREN_SUCCESS, FETCH_CHILDREN_FAILURE, RESET_CHILDREN,
	CREATE_CHILD, CREATE_CHILD_SUCCESS, CREATE_CHILD_FAILURE, RESET_NEW_CHILD,
	CREATE_TASK, CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE, RESET_NEW_TASK,
	VALIDATE_TASK_FIELDS,VALIDATE_TASK_FIELDS_SUCCESS, VALIDATE_TASK_FIELDS_FAILURE, RESET_TASK_FIELDS,
	FETCH_TASKS, FETCH_TASKS_SUCCESS,  FETCH_TASKS_FAILURE, RESET_ACTIVE_TASKS,
	VALIDATE_CHILD_FIELDS,VALIDATE_CHILD_FIELDS_SUCCESS, VALIDATE_CHILD_FIELDS_FAILURE, RESET_CHILD_FIELDS,
	FETCH_TRANSACTIONS, FETCH_TRANSACTIONS_SUCCESS,  FETCH_TRANSACTIONS_FAILURE, RESET_TRANSACTIONS,
	CREATE_TRANSACTION, CREATE_TRANSACTION_SUCCESS, CREATE_TRANSACTION_FAILURE, RESET_NEW_TRANSACTION,
	VALIDATE_TRANSACTION_FIELDS,VALIDATE_TRANSACTION_FIELDS_SUCCESS, VALIDATE_TRANSACTION_FIELDS_FAILURE, RESET_TRANSACTION_FIELDS

} from '../actions/index';


	const INITIAL_STATE = {
		childList: {children: [], error:null, loading: false},
		activeTasks:{tasks: [], error:null, loading: false},
		newChild:{child:null, error: null, loading: false},
		newTask:{task:null, error: null, loading: false},
		transactions:{transactions: [], error:null, loading: false}
	};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

  case FETCH_CHILDREN:// start fetching children and set loading = true
  	return { ...state, childList: {children:[], error: null, loading: true} };
  case FETCH_CHILDREN_SUCCESS:// return list of children and make loading = false
    return { ...state, childList: {children: action.payload, error:null, loading: false} };
  case FETCH_CHILDREN_FAILURE:// return error and make loading = false
    return { ...state, childList: {children: null, error: action.payload, loading: false} };
  case RESET_CHILDREN:// reset childList to initial state
    return { ...state, childList: {children: null, error:null, loading: false} };

	case FETCH_TASKS:
    return { ...state, activeTasks:{...state.activeTasks, loading: true}};
  case FETCH_TASKS_SUCCESS:
    return { ...state, activeTasks: {tasks: action.payload.data, error:null, loading: false}};
  case FETCH_TASKS_FAILURE:
    return { ...state, activeTasks: {tasks: null, error:action.payload.data, loading:false}};
  case RESET_ACTIVE_TASKS:
    return { ...state, activeTasks: {tasks: null, error:null, loading: false}};

	case CREATE_CHILD:
  	return {...state, newChild: {...state.newChild, loading: true}}
  case CREATE_CHILD_SUCCESS:
  	return {...state, newChild: {child:action.payload, error:null, loading: false}}
  case CREATE_CHILD_FAILURE:
  	return {...state, newChild: {child:null, error:action.payload.data, loading: false}}
  case RESET_NEW_CHILD:
  	return {...state, newChild: {child:null, error:null, loading: false}}

	case CREATE_TASK:
  	return {...state, newTask: {...state.newTask, loading: true}}
  case CREATE_TASK_SUCCESS:
  	return {...state, newTask: {task:action.payload, error:null, loading: false}}
  case CREATE_TASK_FAILURE:
  	return {...state, newTask: {task:null, error:action.payload.data, loading: false}}
  case RESET_NEW_TASK:
  	return {...state, newTask: {task:null, error:null, loading: false}}

	case VALIDATE_TASK_FIELDS:
	    return {...state, newTask:{...state.newTask, error: null, loading: true}}
  case VALIDATE_TASK_FIELDS_SUCCESS:
    return {...state, newTask:{...state.newTask, error: null, loading: false}}
  case VALIDATE_TASK_FIELDS_FAILURE:
    let resultTask = action.payload.data;
    let errorTask = {task: resultTask.task, value: resultTask.value};
    return {...state, newTask:{...state.newTask, error: errorTask, loading: false}}
  case RESET_TASK_FIELDS:
    return {...state, newTask:{...state.newTask,task: null, error: null, loading: null}}

	case VALIDATE_CHILD_FIELDS:
	    return {...state, newChild:{...state.newChild, error: null, loading: true}}
  case VALIDATE_CHILD_FIELDS_SUCCESS:
    return {...state, newChild:{...state.newChild, error: null, loading: false}}
  case VALIDATE_CHILD_FIELDS_FAILURE:
    let result = action.payload.data;
    let error = {name: result.name, image: result.image, description: result.description};
    return {...state, newChild:{...state.newChild, error: error, loading: false}}
  case RESET_CHILD_FIELDS:
    return {...state, newChild:{...state.newChild, error: null, loading: null}}

	case FETCH_TRANSACTIONS:
    return { ...state, transactions: {...state.transactions, loading: true}};
  case FETCH_TRANSACTIONS_SUCCESS:
    return { ...state, transactions: {transactions: action.payload.data, error:null, loading: false}};
  case FETCH_TRANSACTIONS_FAILURE:
    return { ...state, transactions: {transactions: null, error:action.payload.data, loading:false}};
  case RESET_TRANSACTIONS:
    return { ...state, transactions: {transactions: null, error:null, loading: false}};

	case CREATE_TRANSACTION:
  	return {...state, newTransaction: {...state.newTransaction, loading: true}}
  case CREATE_TRANSACTION_SUCCESS:
  	return {...state, newTransaction: {transaction:action.payload, error:null, loading: false}}
  case CREATE_TRANSACTION_FAILURE:
  	return {...state, newTransaction: {transaction:null, error:action.payload.data, loading: false}}
  case RESET_NEW_TRANSACTION:
  	return {...state, newTransaction: {transaction:null, error:null, loading: false}}

	case VALIDATE_TRANSACTION_FIELDS:
	    return {...state, newTransaction:{...state.newTransaction, error: null, loading: true}}
  case VALIDATE_TRANSACTION_FIELDS_SUCCESS:
    return {...state, newTransaction:{...state.newTransaction, error: null, loading: false}}
  case VALIDATE_TRANSACTION_FIELDS_FAILURE:
    let resultTransaction = action.payload.data;
    let errorTransaction = {transaction: resultTransaction.transaction, amount: resultTransaction.amount};
    return {...state, newTransaction:{...state.newTransaction, error: errorTask, loading: false}}
  case RESET_TRANSACTION_FIELDS:
    return {...state, newTransaction:{...state.newTransaction,transaction: null, error: null, loading: null}}


  default:
    return state;
  }
}
