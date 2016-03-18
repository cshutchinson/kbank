import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions/index';
import { Link } from 'react-router';
import Header from '../containers/HeaderContainer.js';
import TransactionListContainer from '../containers/TransactionListContainer.js';

class ChildTransactions extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div className='container'>
        <Header type="transactions_show" postId={this.props.params.id}/>
        <TransactionListContainer id={this.props.params.id}/>
      </div>
    );
  }
}

export default ChildTransactions;
