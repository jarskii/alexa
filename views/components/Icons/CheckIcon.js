import React, {Component} from 'react';
import classNames from 'classnames';

export default class CheckIcon extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {fill} = this.props;
    return (
      <svg
        className="CheckIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill={fill ? fill : "#222"}
        viewBox="0 0 32 32"
      >
        <path d="M28.998 8.531l-2.134-2.134c-0.394-0.393-1.030-0.393-1.423 0l-12.795 12.795-6.086-6.13c-0.393-0.393-1.029-0.393-1.423 0l-2.134 2.134c-0.393 0.394-0.393 1.030 0 1.423l8.924 8.984c0.393 0.393 1.030 0.393 1.423 0l15.648-15.649c0.393-0.392 0.393-1.030 0-1.423z"></path>
      </svg>

    )
  }
}