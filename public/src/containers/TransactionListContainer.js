import TransactionList from '../components/TransactionList.js';
import { fetchTransactions, fetchTransactionsSuccess, fetchTransactionsFailure, resetTransactions } from '../actions/index';
import { connect } from 'react-redux';


function mapStateToProps(state, ownProps) {
  return { transactions: state.children.transactions, childId: ownProps.id };
}

const mapDispatchToProps = (dispatch) => {
  return {
  	 fetchTransactions: (id) => {
    	dispatch(fetchTransactions(id))
      	.then((data) =>
          {
          	!data.error ? dispatch(fetchTransactionsSuccess(data.payload)) : dispatch(fetchTransactionsFailure(data.payload));
          })
  	 },
     resetMe: () =>{
        dispatch(resetTransactions());
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
