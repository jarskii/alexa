import React, {Component} from 'react';
import classNames from 'classnames';

export default class Image extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onLoadSuccess() {
    this.setState({
      isLoaded: true
    })
  }
  componentDidMount() {
    if (isImageOk(this.refs.img)) {
      this.setState({
        isLoaded: true
      })
    }
  }
  render() {
    const {className, ...restProps} = this.props;
    const {isLoaded} = this.state;
    const cls = {
      "Image": true,
      "Image--isShowed": isLoaded
    };

    cls[className] = true;

    return (
      <img
        ref="img"
        className={classNames(cls)}
        onLoad={this.onLoadSuccess.bind(this)}
        {...restProps}
      />
    )
  }
}

function isImageOk(img) {
  // During the onload event, IE correctly identifies any images that
  // weren't downloaded as not complete. Others should too. Gecko-based
  // browsers act like NS4 in that they report this incorrectly.
  if (!img.complete) {
    return false;
  }

  // However, they do have two very useful properties: naturalWidth and
  // naturalHeight. These give the true size of the image. If it failed
  // to load, either of these should be zero.
  if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
    return false;
  }

  // No other way of checking: assume it's ok.
  return true;
}