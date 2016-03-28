import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

	renderLinks() {
		const { type } = this.props;
		if(type === 'child_index') {
       return (
         <div>
        <ul className="nav navbar-nav navbar-left">
        	<li style={{paddingRight: '20px'}} role="presentation"><Link to="/">KBank Home</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
    			<li style={{paddingRight: '20px'}} role="presentation">
    				<Link to="/child/new">
    				Add Child
  					</Link>
          </li>
  			</ul>
      </div>
  		 );
  	} else if(type === 'child_new') {
       return (
        <ul className="nav navbar-nav navbar-right">
    			<li style={{paddingRight: '10px'}} role="presentation">
    				<Link className="text-xs-right" to="/">KBank Home</Link>
    			</li>
  			</ul>
  		 );
  	} else if(type === 'tasks_show') {
  			return (
  				<span>
  			<ul className="nav navbar-nav navbar-left">
    			<li style={{paddingRight: '20px'}} role="presentation"><Link to="/">KBank Home</Link></li>
          <li style={{paddingRight: '20px'}} role="presentation"><Link to={"/children/transactions/"+this.props.postId}>Transactions</Link></li>
  			</ul>

    	  </span>
  			);
  	} else if(type === 'transactions_show') {
  			return (
  				<span>
  			<ul className="nav navbar-nav navbar-left">
    			<li style={{paddingRight: '20px'}} role="presentation"><Link to="/">KBank Home</Link></li>
          <li style={{paddingRight: '20px'}} role="presentation"><Link to={"/children/tasks/"+this.props.postId}>Tasks</Link></li>
  			</ul>

    	  </span>
  			);
  	}
	};

	render() {
			return (
			 <nav className="navbar navbar-default navbar-static-top">
			      <div id="navbar" className="navbar-collapse collapse">
			      {this.renderLinks()}
	      		</div>
			 </nav>
			);
	}
}

export default Header
