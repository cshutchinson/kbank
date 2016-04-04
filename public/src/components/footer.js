import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Footer extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

	render() {
			return (
        <footer className="footer">
          <hr></hr>
          <div className="container row text-center">
            <p className="text-center">KBank - Copyright 2016</p>
          </div>
        </footer>
			);
	}
}

export default Footer
