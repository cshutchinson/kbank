import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from '../containers/HeaderContainer.js';

class ChildForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newChild.child && !nextProps.newChild.error) {
      this.context.router.push('/main');
    }
  }

  render() {
    const {asyncValidating, fields: { name, image }, handleSubmit, submitting } = this.props;

    return (
      <div>
      <form onSubmit={handleSubmit(this.props.createChild.bind(this))}>
        <div className={`form-group ${name.touched && name.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Name*</label>
          <input type="text" className="form-control" {...name} />
          <div className="help-block">
            {name.touched ? name.error : ''}
          </div>
          <div className="help-block">
            {asyncValidating === 'name'? 'validating..': ''}
          </div>
        </div>

        <div className={`form-group ${image.touched && image.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Image URL*</label>
          <input type="text" className="form-control" {...image} />
          <div className="help-block">
            {image.touched ? image.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>
        <Link to="/" className="btn btn-error">Cancel</Link>
      </form>
      </div>

    );
  }
}

export default ChildForm;
