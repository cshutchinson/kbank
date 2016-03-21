import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  componentWillMount() {

  }


  render() {

    return (
      <div className="container home">
        <h1>KBank</h1>
        <h2 className="whiteText">Incentivizing the Allowance</h2>
        <div>
          <div className="form-group">
            <div className="row">
            <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-5">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          </div>
          <div className="form-group">
            <div className="row">
            <label  className="col-sm-2 control-label">Password</label>
            <div className="col-sm-5">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
