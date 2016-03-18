import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
// import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class TransactionList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentDidMount() {
    this.props.fetchTransactions(this.props.childId);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.transactions.error) {
      alert('No such child');
      this.context.router.push('/');
    }
  }
  renderTransactions(transactions) {
    return transactions.map((transaction) => {
      return (
        <li className="list-group-item" key={transaction.id}>
          {transaction.id}->{transaction.date}-{transaction.description}-{transaction.amount}
        </li>
      );
    });
  }

  render() {
    const { transactions } = this.props.transactions;
    if (!transactions) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Transactions</h1>
        <ul className="list-group">
          {this.renderTransactions(transactions)}
        </ul>
      </div>
    );
  }
}

export default TransactionList;
