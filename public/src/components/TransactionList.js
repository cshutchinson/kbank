import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
var moment = require('moment');


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
      const formattedDate = moment(transaction.date).format('llll');
      return (
        <tr className={transaction.amount > 0 ? "success" : "danger"} key={transaction.date}>
          <td className="text-center">{formattedDate}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
        </tr>
      );
    });
  }

  render() {
    const { transactions } = this.props.transactions;
    if (!transactions) {
      return <div>Loading...</div>;
    }

    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="text-center">Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTransactions(transactions)}
        </tbody>
      </table>
    );
  }
}

export default TransactionList;
