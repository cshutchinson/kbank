import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ChildList from '../containers/ChildListContainer.js';

class ChildIndex extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderContainer type="child_index" />
        <ChildList />
      </div>
    );
  }
}


export default ChildIndex;
