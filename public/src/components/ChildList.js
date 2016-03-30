import React, { Component } from 'react';
import { Link } from 'react-router';

class ChildList extends Component {
  componentWillMount() {
    this.props.fetchChildren();
  }

  renderPosts(children) {
    return children.map((child) => {
      return (
        <div className="panel panel-primary col-sm-4 equal" key={child.id}>
          <div className="panel-heading">{child.name}</div>
          <div className="panel-body">

            <div className="row">
              <div className="col-sm-3 col-sm-offset-1 col-xs-3 col-xs-offset-1">
                <img className="img-circle" src={child.image} width="50"></img>
              </div>
              <div className="col-sm-8 col-xs-8">
                <Link style={{color:'blue'}} to={"children/tasks/" + child.id}>
                  <p>Tasks</p>
                </Link>
                <Link style={{color:'blue'}} to={"children/transactions/" + child.id}>
                  <p>Transactions</p>
                </Link>
              </div>
            </div>
            <div className="row">
              <ul className="nav nav-pills">
                <li className="col-sm-4 col-sm-offset-1"><a href="#">Open Tasks <span className="badge">{child.taskcount}</span></a></li>
                <li className="col-sm-4"><a href="#">Available Balance <span className="badge">{'$ ' + (child.balance > 0 ? child.balance : '0.00')}</span></a></li>
              </ul>
            </div>
          </div>
        </div>

      );
    });
  }

  render() {
    if(this.props.loading) {
      return <div><h1>Children</h1><h3>Loading...</h3></div>
    }

    return (
      <div>
        <h1>Children</h1>
        <ul className="list-group">
          {this.renderPosts(this.props.children)}
        </ul>
      </div>
    );
  }
}
export default ChildList;
