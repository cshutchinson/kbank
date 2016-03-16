import {
	FETCH_CHILDREN, FETCH_CHILDREN_SUCCESS, FETCH_CHILDREN_FAILURE, RESET_CHILDREN,
	CREATE_CHILD, CREATE_CHILD_SUCCESS, CREATE_CHILD_FAILURE, RESET_NEW_CHILD,
	VALIDATE_CHILD_FIELDS,VALIDATE_CHILD_FIELDS_SUCCESS, VALIDATE_CHILD_FIELDS_FAILURE, RESET_CHILD_FIELDS

} from '../actions/index';


	const INITIAL_STATE = {
		childList: {children: [], error:null, loading: false},
		newChild:{child:null, error: null, loading: false}
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

	case CREATE_CHILD:
  	return {...state, newChild: {...state.newChild, loading: true}}
  case CREATE_CHILD_SUCCESS:
  	return {...state, newChild: {child:action.payload, error:null, loading: false}}
  case CREATE_CHILD_FAILURE:
  	return {...state, newChild: {child:null, error:action.payload.data, loading: false}}
  case RESET_NEW_CHILD:
  	return {...state,  newChild:{child:null, error:null, loading: false}}

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

  default:
    return state;
  }
}
