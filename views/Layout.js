import React, {Component} from 'react';
import Image from './components/Image/index.js';

export default class Layout extends Component {
  constructor(props) {
   super(props);
   this.state = {};
  }

  onHandle() {

  }

  render() {
    return (
      <div className="Layout">
        <div className="LayoutRow">
          <Image
            className="LayoutRowImage"
            src="/images/2.jpg"
          />
          <h1 onClick={this.onHandle} className="LayoutRowButton">
            Камера ARRI ALEXA mini.
            Aренда в Москве
          </h1>
        </div>
      </div>
    )
  }
};
