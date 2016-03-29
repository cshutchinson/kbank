import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class TaskList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
     this.props.resetMe();
  }

  componentDidMount() {
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
        let boundClick = this.props.toggleTask.bind(this, task.id, this.props.childId);
        return (
          <tr key={task.id}>
            <td>{task.task}</td>
            <td>{task.value}</td>
            <td>{task.completed ? 'Yes' : 'No'}</td>
            <td><input className="btn btn-primary btn-xs" onClick={boundClick} type="button" value="mark complete" /></td>
          </tr>
        );
      });
  }

  render() {
    const { tasks } = this.props.activeTasks;
    if (!tasks) {
      return <div>Loading...</div>;
    }
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Task</th>
            <th>Value</th>
            <th>Complete</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTasks(tasks)}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
