import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import './style.scss';

class App extends Component {

  render() {
    return (
      <div>
        hello world!
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatch = (dispatch) => {
  return {
    dispatch: dispatch
  }
};

export default connect(mapStateToProps,mapDispatch)(App);
