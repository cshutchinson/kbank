import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ChildList from '../containers/ChildListContainer.js';
import Footer from '../containers/FooterContainer.js';

class ChildIndex extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderContainer type="child_index" />
        <ChildList />
        <Footer />
      </div>
    );
  }
}


export default ChildIndex;
