import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  componentWillMount() {

  }


  render() {

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">KBank</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
              <ul className="nav navbar-nav">
                <li><a href="main">Child List<span className="sr-only">(current)</span></a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="jumbotron">
          <h1>KBank</h1>
          <p>Incentivizing the allowance.</p>
          <p><a href="main" className="btn btn-primary btn-med">Get Started</a></p>
        </div>
      </div>
    );
  }
}
export default Home;
