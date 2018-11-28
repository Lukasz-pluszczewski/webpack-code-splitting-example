import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import data from '../../data/data.json';

export default class Huge extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <div>Huge JSON file with {_.size(data)} elements.</div>
        <div>{moment().format()}</div>
        <pre>
          {JSON.stringify(data[48], null, 2)}
        </pre>
      </div>
    );
  }
}
