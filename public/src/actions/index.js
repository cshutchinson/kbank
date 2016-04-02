import axios from 'axios';

// child list
export const FETCH_CHILDREN = 'FETCH_CHILDREN';
export const FETCH_CHILDREN_SUCCESS = 'FETCH_CHILDREN_SUCCESS';
export const FETCH_CHILDREN_FAILURE = 'FETCH_CHILDREN_FAILURE';
export const RESET_CHILDREN = 'RESET_CHILDREN';

//Create new post
export const CREATE_CHILD = 'CREATE_CHILD';
export const CREATE_CHILD_SUCCESS = 'CREATE_CHILD_SUCCESS';
export const CREATE_CHILD_FAILURE = 'CREATE_CHILD_FAILURE';
export const RESET_NEW_CHILD = 'RESET_NEW_CHILD';

export const CREATE_TASK = 'CREATE_TASK';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';
export const RESET_NEW_TASK = 'RESET_NEW_TASK';

export const VALIDATE_TASK_FIELDS = 'VALIDATE_TASK_FIELDS';
export const VALIDATE_TASK_FIELDS_SUCCESS = 'VALIDATE_TASK_FIELDS_SUCCESS';
export const VALIDATE_TASK_FIELDS_FAILURE = 'VALIDATE_TASK_FIELDS_FAILURE';
export const RESET_TASK_FIELDS = 'RESET_TASK_FIELDS';

//Validate post fields like name, imageURL on the server
export const VALIDATE_CHILD_FIELDS = 'VALIDATE_CHILD_FIELDS';
export const VALIDATE_CHILD_FIELDS_SUCCESS = 'VALIDATE_CHILD_FIELDS_SUCCESS';
export const VALIDATE_CHILD_FIELDS_FAILURE = 'VALIDATE_CHILD_FIELDS_FAILURE';
export const RESET_CHILD_FIELDS = 'RESET_CHILD_FIELDS';

// fetch tasks for each child
export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
export const RESET_ACTIVE_TASKS = 'RESET_ACTIVE_TASKS';

// toggle task completion status
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const TOGGLE_TASK_SUCCESS = 'TOGGLE_TASK_SUCCESS';
export const TOGGLE_TASK_FAILURE = 'TOGGLE_TASK_FAILURE';

// fetch transactions for each children
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_FAILURE = 'FETCH_TRANSACTIONS_FAILURE';
export const RESET_TRANSACTIONS = 'RESET_TRANSACTIONS';

// create transaction when task marked complete or manual entry
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const CREATE_TRANSACTION_SUCCESS = 'CREATE_TRANSACTION_SUCCESS';
export const CREATE_TRANSACTION_FAILURE = 'CREATE_TRANSACTION_FAILURE';
export const RESET_NEW_TRANSACTION = 'RESET_NEW_TRANSACTION';

export const VALIDATE_TRANSACTION_FIELDS = 'VALIDATE_TRANSACTION_FIELDS';
export const VALIDATE_TRANSACTION_FIELDS_SUCCESS = 'VALIDATE_TRANSACTION_FIELDS_SUCCESS';
export const VALIDATE_TRANSACTION_FIELDS_FAILURE = 'VALIDATE_TRANSACTION_FIELDS_FAILURE';
export const RESET_TRANSACTION_FIELDS = 'RESET_TRANSACTION_FIELDS';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
export function fetchChildren() {
  const request = axios.get(`${ROOT_URL}/children`);
  return {
    type: FETCH_CHILDREN,
    payload: request
  };
}

export function fetchChildrenSuccess(children) {
  return {
    type: FETCH_CHILDREN_SUCCESS,
    payload: children
  };
}

export function fetchChildrenFailure(error) {
  return {
    type: FETCH_CHILDREN_FAILURE,
    payload: error
  };
}

export function validateChildFields(props) {
  const request = axios.post(`${ROOT_URL}/validateChildFields`, props);

  return {
    type: VALIDATE_CHILD_FIELDS,
    payload: request
  };
}

export function validateChildFieldsSuccess() {
  return {
    type: VALIDATE_CHILD_FIELDS_SUCCESS
  };
}

export function validateChildFieldsFailure(error) {
  return {
    type: VALIDATE_CHILD_FIELDS_FAILURE,
    payload: error
  };
}

export function resetChildFields() {
  return {
    type: RESET_CHILD_FIELDS
  }
};


export function createChild(props) {
  const request = axios.post(`${ROOT_URL}/children/new`, props);

  return {
    type: CREATE_CHILD,
    payload: request
  };
}

export function createChildSuccess(newChild) {
  return {
    type: CREATE_CHILD_SUCCESS,
    payload: newChild
  };
}

export function createChildFailure(error) {
  return {
    type: CREATE_CHILD_FAILURE,
    payload: error
  };
}

export function resetNewChild() {
  return {
    type: RESET_NEW_CHILD
  }
};

export function fetchTasks(id) {
  const request = axios.get(`${ROOT_URL}/children/tasks/${id}`);

  return {
    type: FETCH_TASKS,
    payload: request
  };
}


export function fetchTasksSuccess(activeTasks) {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: activeTasks
  };
}

export function fetchTasksFailure(error) {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error
  };
}

export function resetActiveTasks() {
  return {
    type: RESET_ACTIVE_TASKS
  }
};

export function toggleTask(id) {
  const request = axios.post(`${ROOT_URL}/toggleTask`, {id: id});

  return {
    type: TOGGLE_TASK,
    payload: request
  };
}


export function toggleTaskSuccess(activeTasks, ) {
  return {
    type: TOGGLE_TASK_SUCCESS,
    payload: activeTasks
  };
}

export function toggleTaskFailure(error) {
  return {
    type: TOGGLE_TASK_FAILURE,
    payload: error
  };
}


export function fetchTransactions(id) {
  const request = axios.get(`${ROOT_URL}/children/transactions/${id}`);
  return {
    type: FETCH_TRANSACTIONS,
    payload: request
  };
}

export function fetchTransactionsSuccess(transactions) {
  return {
    type: FETCH_TRANSACTIONS_SUCCESS,
    payload: transactions
  };
}

export function fetchTransactionsFailure(error) {
  return {
    type: FETCH_TRANSACTIONS_FAILURE,
    payload: error
  };
}

export function resetTransactions() {
  return {
    type: RESET_TRANSACTIONS
  }
};

export function createTask(props, id) {
  const request = axios.post(`${ROOT_URL}/newTask`, props);
  return {
    type: CREATE_TASK,
    payload: request
  };
}

export function createTaskSuccess(newTask) {
  return {
    type: CREATE_TASK_SUCCESS,
    payload: newTask
  };
}

export function createTaskFailure(error) {
  return {
    type: CREATE_TASK_FAILURE,
    payload: error
  };
}

export function resetNewTask() {
  return {
    type: RESET_NEW_TASK
  }
};

export function validateTaskFields(props) {
  const request = axios.post(`${ROOT_URL}/validateTaskFields`, props);

  return {
    type: VALIDATE_TASK_FIELDS,
    payload: request
  };
}

export function validateTaskFieldsSuccess() {
  return {
    type: VALIDATE_TASK_FIELDS_SUCCESS
  };
}

export function validateTaskFieldsFailure(error) {
  return {
    type: VALIDATE_TASK_FIELDS_FAILURE,
    payload: error
  };
}

export function resetTaskFields() {
  return {
    type: RESET_TASK_FIELDS
  }
};

export function createTransaction(props){
  const request = axios.post(`${ROOT_URL}/createManualTransaction`, props);

  return {
    type: CREATE_TRANSACTION,
    payload: request
  };
};

export function createTransactionSuccess(newTransaction) {
  return {
    type: CREATE_TRANSACTION_SUCCESS,
    payload: newTransaction
  };
}

export function createTransactionFailure(error) {
  return {
    type: CREATE_TRANSACTION_FAILURE,
    payload: error
  };
}

export function resetNewTransaction() {
  return {
    type: RESET_NEW_TRANSACTION
  }
};

export function validateTransactionFields(props) {
  const request = axios.post(`${ROOT_URL}/validateTransactionFields`, props);

  return {
    type: VALIDATE_TRANSACTION_FIELDS,
    payload: request
  };
}

export function validateTransactionFieldsSuccess() {
  return {
    type: VALIDATE_TRANSACTION_FIELDS_SUCCESS
  };
}

export function validateTransactionFieldsFailure(error) {
  return {
    type: VALIDATE_TRANSACTION_FIELDS_FAILURE,
    payload: error
  };
}

export function resetTransactionFields() {
  return {
    type: RESET_TRANSACTION_FIELDS
  }
};
