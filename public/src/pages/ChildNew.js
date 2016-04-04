import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ChildFormContainer from '../containers/ChildFormContainer.js';
import Footer from '../containers/FooterContainer.js';

class ChildNew extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderContainer type="child_new"/>
        <ChildFormContainer />
        <Footer />
      </div>
    );
  }
}


export default ChildNew;
