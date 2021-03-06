import React, {Component} from 'react';
import classNames from 'classnames';

export default class CrossIcon extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {fill} = this.props;
    return (
      <svg
        className="CrossIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill={fill ? fill : "#222"}
        viewBox="0 0 1024 1024"
      >
        <path d="M626.784 512.032l195.072 195.072c12.672 12.672 12.672 33.248 0 45.92l-68.832 68.832c-12.672 12.672-33.216 12.672-45.92 0l-195.104-195.072-195.104 195.072c-12.672 12.672-33.216 12.672-45.888 0l-68.864-68.832c-12.672-12.672-12.672-33.216 0-45.92l195.104-195.072-195.104-195.104c-12.672-12.672-12.672-33.248 0-45.92l68.896-68.832c12.672-12.672 33.216-12.672 45.888 0l195.072 195.104 195.104-195.104c12.672-12.672 33.216-12.672 45.92 0l68.832 68.864c12.672 12.672 12.672 33.216 0 45.92l-195.072 195.072z"></path>
      </svg>

    )
  }
}