import { connect } from 'react-redux'
import { fetchChildren, fetchChildrenSuccess, fetchChildrenFailure } from '../actions/index';

import ChildList from '../components/ChildList';


const mapStateToProps = (state) => {
  return {
    children: state.children.childList.children,
    loading: state.children.childList.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChildren: () => {
      dispatch(fetchChildren()).then((response) => {
      		let data = response.payload.data ? response.payload.data : {data: 'Network Error'};
            !response.error ? dispatch(fetchChildrenSuccess(data)) : dispatch(fetchChildrenFailure(data));
          });
    }
  }
}


const ChildListContainer = connect(mapStateToProps, mapDispatchToProps)(ChildList);

export default ChildListContainer
