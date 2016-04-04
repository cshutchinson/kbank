import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import { Link } from 'react-router';
import Header from '../containers/HeaderContainer.js';
import TaskListContainer from '../containers/TaskListContainer.js';
import TaskFormContainer from '../containers/TaskFormContainer.js';
import Footer from '../containers/FooterContainer.js';


class ChildTasks extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div className='container'>
        <Header type="tasks_show" postId={this.props.params.id}/>
        <div className="row">
          <div className="col-sm-7">
            <div className="panel panel-primary">
              <TaskListContainer id={this.props.params.id}/>
            </div>
          </div>
          <div className="col-sm-5">
              <p>Add A New Task</p>
              <TaskFormContainer id={this.props.params.id}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ChildTasks;
