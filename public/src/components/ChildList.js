import React, { Component } from 'react';
import { Link } from 'react-router';

class PostsList extends Component {

  renderPosts(children) {
    return posts.map((child) => {
      return (
        <li className="list-group-item" key={child.id}>
          <Link style={{color:'black'}} to={"child/" + post._id}>
            <h3 className="list-group-item-heading">{child.name}</h3>
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
}
export default ChildList;
