import React, { Component } from 'react';
import { Link } from 'react-router';

class ChildList extends Component {
  componentWillMount() {
    this.props.fetchChildren();
  }

  // <div class="panel panel-default">
  //   <div class="panel-heading">Panel heading</div>
  //   <div class="panel-body">
  //     Panel content
  //   </div>
  // </div>

  // <li className="list-group-item" key={child.id}>
  //     <h3 className="list-group-item-heading">{child.name}</h3>
  //   <Link style={{color:'blue'}} to={"children/tasks/" + child.id}>
  //     <h4 className="list-group-item">Tasks</h4>
  //   </Link>
  //   <Link style={{color:'blue'}} to={"children/transactions/" + child.id}>
  //     <h4 className="list-group-item">Transactions</h4>
  //   </Link>
  // </li>

  renderPosts(children) {
    return children.map((child) => {
      return (
        <div className="panel panel-default col-sm-4 equal" key={child.id}>
          <div className="panel-heading">{child.name}</div>
          <div className="panel-body">
            <div className="col-md-8">
              <Link style={{color:'blue'}} to={"children/tasks/" + child.id}>
                <p>Tasks</p>
              </Link>
              <Link style={{color:'blue'}} to={"children/transactions/" + child.id}>
                <p>Transactions</p>
              </Link>
            </div>
            <div className="col-md-4">
              <img src={child.image} width="50"></img>
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
