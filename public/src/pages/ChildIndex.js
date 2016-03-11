import React, { Component } from 'react';
import ChildList from '../containers/ChildListContainer.js';

class ChildIndex extends Component {
  render() {
    return (
      <div className='container'>
        <ChildList />
      </div>
    );
  }
}


export default ChildIndex;
