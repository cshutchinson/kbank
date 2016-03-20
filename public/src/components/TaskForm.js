import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from '../containers/HeaderContainer.js';

class TaskForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    this.props.resetMe();
  }

  componentDidMount(){
    this.props.fields.child_Id.onChange(this.props.id);
  }

  render() {
    const {asyncValidating, fields: { task, value, child_Id}, handleSubmit, submitting } = this.props;

    return (
      <div>
      <form onSubmit={handleSubmit(this.props.createTask.bind(this))}>
        <div className={`form-group ${task.touched && task.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Task</label>
          <input type="text" className="form-control" {...task} />
          <div className="help-block">
            {task.touched ? task.error : ''}
          </div>
          <div className="help-block">
            {asyncValidating === 'task'? 'validating..': ''}
          </div>
        </div>

        <div className={`form-group ${value.touched && value.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Value</label>
          <input type="text" className="form-control" {...value} />
          <div className="help-block">
            {value.touched ? value.error : ''}
          </div>
        </div>

        <input type="hidden" value={this.props.child_Id} className="form-control" {...child_Id} />



        <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>
        <Link to="/" className="btn btn-error">Cancel</Link>
      </form>
      </div>

    );
  }
}

export default TaskForm;
