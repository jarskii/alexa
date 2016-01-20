import React, {Component} from 'react';
import classNames from 'classnames';

export default class Image extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  onFocus() {
    this.setState({
      error: null
    })
  }
  render() {
    const {className, label, ...restProps} = this.props;
    const {value, error} = this.state;
    const cls = {
      "Input": true
    };


    cls[className] = !!className;

    return (
      <div className={classNames(cls)}>
        <div className="InputLabel">{label}</div>
        {
          error
          &&
          <div className="InputError">{error}</div>
        }
        <input
          className="InputField"
          onChange={this.onChange.bind(this)}
          onFocus={this.onFocus.bind(this)}
          value={value}
          {...restProps}
        />
      </div>

    )
  }
}
