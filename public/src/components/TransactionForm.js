import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from '../containers/HeaderContainer.js';

class TransactionForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    this.props.resetMe();
  }

  componentDidMount(){
    this.refs.transType.focus()
    //redux form update
    this.props.fields.child_Id.onChange(this.props.id);
  }

  componentDidUpdate(){

  }

  render() {
    const {asyncValidating, fields: { transaction, amount, child_Id}, handleSubmit, submitting } = this.props;

    return (
      <div>
      <form onSubmit={handleSubmit(this.props.createTransaction.bind(this))}>
        <div className={`form-group ${transaction.touched && transaction.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Transaction Type</label>
          <select {...transaction} className="form-control" ref="transType" value={transaction.value || ''}>
            <option></option>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Deposit">Deposit</option>
          </select>
          <div className="help-block">
            {transaction.touched ? transaction.error : ''}
          </div>
          <div className="help-block">
            {asyncValidating === 'transaction'? 'validating..': ''}
          </div>
        </div>

        <div className={`form-group ${amount.touched && amount.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Amount</label>
          <div className="input-group">
            <div className="input-group-addon">$</div>
            <input type="text" placeholder="Amount" className="form-control"  {...amount} />
          </div>
          <div className="help-block">
            {amount.touched ? amount.error : ''}
          </div>
        </div>

        <input type="hidden" value={this.props.child_Id} className="form-control" {...child_Id} />

        <button type="submit" className="btn btn-primary"  disabled={submitting} >Transfer Cash</button>
        <Link to="/" className="btn btn-error">Cancel</Link>
      </form>
      </div>

    );
  }
}

export default TransactionForm;
