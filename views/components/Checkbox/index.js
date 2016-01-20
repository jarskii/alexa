import React, {Component} from 'react';
import classNames from 'classnames';

export default class Checkbox extends Component {
  constructor(props) {
    super();
    this.state = {
      checked: !!props.checked
    };
  }
  onChange() {
    const {checked} = this.state;

    this.setState({
      checked: !checked
    });
  }
  handleHover() {
    const {caption, onHover} = this.props;

    onHover(caption);
  }
  handleLeave() {
    const {onLeave} = this.props;

    onLeave();
  }
  render() {
    const {label, ...restProps} = this.props;
    const {checked} = this.state;

    return (
      <div className="Checkbox">
        <input
          className="CheckboxButton"
          type="checkbox"
          onChange={this.onChange.bind(this)}
          checked={checked}
          {...restProps}
        />
        <span
          onClick={this.onChange.bind(this)}
          className="CheckboxLabel"
          onMouseEnter={this.handleHover.bind(this)}
          onMouseLeave={this.handleLeave.bind(this)}
        >
          {label}
        </span>
      </div>

    )
  }
}
