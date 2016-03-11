import { connect } from 'react-redux'
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../actions/index';

import PostsList from '../components/PostsList';


const mapStateToProps = (state) => {
  return {
    chidren: state.children.childList.children,
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


const ChildListContainer = connect(mapStateToProps, mapDispatchToProps)(ChildList)

export default ChildListContainer
