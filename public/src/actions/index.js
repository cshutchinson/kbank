import axios from 'axios';

// child list
export const FETCH_CHILDREN = 'FETCH_CHILDREN';
export const FETCH_CHILDREN_SUCCESS = 'FETCH_CHILDREN_SUCCESS';
export const FETCH_CHILDREN_FAILURE = 'FETCH_CHILDREN_FAILURE';
export const RESET_CHILDREN = 'RESET_CHILDREN';

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
