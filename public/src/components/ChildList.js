import React, { Component } from 'react';
import { Link } from 'react-router';

class ChildList extends Component {
  componentWillMount() {
    this.props.fetchChildren();
  }
  // <Link style={{color:'black'}} to={"child/" + child.id}>
  //   <h3 className="list-group-item-heading">{child.name}</h3>
  // </Link>
  renderPosts(children) {
    return children.map((child) => {
      return (
        <li className="list-group-item" key={child.id}>
            <h3 className="list-group-item-heading">{child.name}</h3>
          <Link style={{color:'blue'}} to={"children/tasks/" + child.id}>
            <h4 className="list-group-item">Tasks</h4>
          </Link>
          <Link style={{color:'blue'}} to={"children/transactions/" + child.id}>
            <h4 className="list-group-item">Transactions</h4>
          </Link>
        </li>
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
