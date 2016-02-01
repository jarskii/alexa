import React, {Component} from 'react';
import classNames from 'classnames';

export default class Background extends Component {
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
    const {image} = this.props;
    const img = document.createElement('img');

    img.src = image;

    img.onload = this.onLoadSuccess.bind(this);

    console.log(img.complete);

    if (isImageOk(img)) {
      this.setState({
        isLoaded: true
      })
    }
  }
  render() {
    const {className, image, ...restProps} = this.props;
    const {isLoaded} = this.state;
    const cls = {
      "Background": true,
      "Background--isShowed": isLoaded
    };

    cls[className] = true;

    const styles = {};

    if (isLoaded) {
      styles.backgroundImage = `url(${image})`;
    }

    console.log(styles);

    return (
      <div
        className={classNames(cls)}
        style={styles}
        {...restProps}
      ></div>
    )
  }
}

function isImageOk(img) {
  // During the onload event, IE correctly identifies any images that
  // weren't downloaded as not complete. Others should too. Gecko-§sed
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