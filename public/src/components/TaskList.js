import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
//import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class TaskList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.props.fetchTasks(this.props.childId);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.activeTasks.error) {
      alert('No such child');
      this.context.router.push('/');
    }
  }

  renderTasks(tasks) {
    return tasks.map((task) => {
      return (
        <li className="list-group-item" key={task.id}>
          {task.task}-{task.value}
        </li>
      );
    });
  }

  render() {
    const { tasks } = this.props.activeTasks;
    if (!tasks) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Tasks</h1>
        <ul className="list-group">
          {this.renderTasks(tasks)}
        </ul>
      </div>
    );
  }
}

export default TaskList;