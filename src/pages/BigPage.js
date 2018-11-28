import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Big from '../components/Big/Big';

class BigPage extends Component {
  render() {
    return (
      <Big {...this.props} />
    );
  }
}

export default BigPage;