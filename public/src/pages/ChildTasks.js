import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import { Link } from 'react-router';
import Header from '../containers/HeaderContainer.js';
import TaskListContainer from '../containers/TaskListContainer.js';

class ChildTasks extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  // onDeleteClick() {
  //   this.props.deletePost(this.props.params.id)
  //     .then(() => { this.context.router.push('/'); });
  // }

  render() {
    return (
      <div className='container'>
        <Header type="tasks_show" postId={this.props.params.id}/>
        <TaskListContainer id={this.props.params.id}/>
      </div>
    );
  }
}

export default ChildTasks;
