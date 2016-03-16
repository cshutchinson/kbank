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

//Validate post fields like Title, Categries on the server
export const VALIDATE_CHILD_FIELDS = 'VALIDATE_CHILD_FIELDS';
export const VALIDATE_CHILD_FIELDS_SUCCESS = 'VALIDATE_CHILD_FIELDS_SUCCESS';
export const VALIDATE_CHILD_FIELDS_FAILURE = 'VALIDATE_CHILD_FIELDS_FAILURE';
export const RESET_CHILD_FIELDS = 'RESET_CHILD_FIELDS';

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
