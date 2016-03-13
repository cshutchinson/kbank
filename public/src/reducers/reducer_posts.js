import {
	FETCH_CHILDREN, FETCH_CHILDREN_SUCCESS, FETCH_CHILDREN_FAILURE, RESET_CHILDREN
} from '../actions/index';


	const INITIAL_STATE = {
		childList: {children: [], error:null, loading: false}
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
  default:
    return state;
  }
}
