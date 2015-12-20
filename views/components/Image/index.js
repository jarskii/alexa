import React, {Component} from 'react';
import classNames from 'classnames';

export default class Image exports Component {
  constructor() {
    this.state = {};
  }
  onLoadSuccess() {
    this.setState({
      isLoaded: true
    })
  }
  render() {
    const {className, ...restProps} = this.props;
    const {isLoaded} = this.state;
    const cls = classNames({
      {"Image"}
      className,
      {"--isShowed": isLoaded}
    });

    return (
      <img
        className={cls}
        onLoad={this.onLoadSuccess}
        onError={this.onError}
        {...restProps}
      />
    )
  }
}
