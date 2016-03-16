import { combineReducers } from 'redux';
import ChildReducer from './reducer_children';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  children: ChildReducer, //<-- Children
  form: formReducer // <-- redux-form
});

export default rootReducer;
