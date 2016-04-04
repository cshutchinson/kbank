import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions/index';
import { Link } from 'react-router';
import Header from '../containers/HeaderContainer.js';
import TransactionListContainer from '../containers/TransactionListContainer.js';
import TransactionFormContainer from '../containers/TransactionFormContainer.js';
import Footer from '../containers/FooterContainer.js';


class ChildTransactions extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div className='container'>
        <Header type="transactions_show" postId={this.props.params.id}/>
        <div className="row">
          <div className="col-sm-7">
            <div className="panel panel-primary">
              <TransactionListContainer id={this.props.params.id}/>
            </div>
          </div>
          <div className="col-sm-5">
            <p>Add A New Transaction</p>
            <TransactionFormContainer id={this.props.params.id}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ChildTransactions;
