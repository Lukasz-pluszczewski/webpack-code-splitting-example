import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

const Child = lazy(() => import(
  /* webpackChunkName: "Child", webpackPrefetch: true */
  '../Child/Child'
));

export default class List extends Component {
  static propTypes = {};
  state = {
    show: false,
  };

  showChild = () => this.setState({ show: true });

  render() {
    return (
      <div>
        <div onClick={this.showChild}>
          This is a big component
        </div>
        <Suspense fallback={<div>Child component is loading...</div>}>
          {this.state.show ? <Child/> : null}
        </Suspense>
      </div>
    );
  }
}
