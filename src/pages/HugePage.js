import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Huge from '../components/Huge/Huge';

class BigPage extends Component {
  render() {
    return (
      <Huge {...this.props} />
    );
  }
}

export default BigPage;