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
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h2>Motivation</h2>
              <p>Don't just give your kids an allowance. Create a reward system to reinforce the behaviors you are teaching your children.</p>
            </div>
            <div className="col-sm-4">
              <h2>Custom Tasks</h2>
              <p>Create custom tasks for each of your children. Give tasks a monetary reward and mark them complete when done. A completed task automatically updates your child's virtual balance.</p>
           </div>
            <div className="col-sm-4">
              <h2>Transactions</h2>
              <p>Create deposits and withdrawals for each of your children to track their spending and savings. We can help you teach saving and spending behaviors easily.</p>
            </div>
          </div>
        </div>

      <hr></hr>

        <footer className="footer">
          <div className="container text-center">
            <p className="">KBank - Copyright 2016</p>
          </div>
        </footer>

      </div>
    );
  }
}
export default Home;
