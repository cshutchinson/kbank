import React, { Component } from 'react';
import { Link } from 'react-router';

class ChildList extends Component {
  componentWillMount() {
    this.props.fetchChildren();
  }

  // <div className="col-sm-8 col-xs-8">
  //   <Link style={{color:'blue'}} to={"children/tasks/" + child.id}>
  //     <p>Tasks</p>
  //   </Link>
  //   <Link style={{color:'blue'}} to={"children/transactions/" + child.id}>
  //     <p>Transactions</p>
  //   </Link>
  // </div>

  renderPosts(children) {
    return children.map((child) => {
      return (
        <div className="panel panel-primary col-sm-4 equal" key={child.id}>
          <div className="panel-heading">{child.name}</div>
          <div className="panel-body">
            <div className="row">
              <ul className="nav nav-pills">
                <li className="col-xs-3 vcenter">
                  <img className="img-circle" src={child.image} width="65"></img>
                </li>
                <li className="col-xs-4"><a href={"children/tasks/" + child.id}>Open Tasks <span className="badge">{child.taskcount}</span></a></li>
                <li className="col-xs-4"><a href={"children/transactions/" + child.id}>Available Balance <span className="badge">{'$ ' + (child.balance > 0 ? child.balance : '0.00')}</span></a></li>
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
