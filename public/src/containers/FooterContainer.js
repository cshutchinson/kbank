import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/footer.js';



function mapStateToProps(state) {
  return {
    // deletedPost: state.posts.deletedPost
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer);
