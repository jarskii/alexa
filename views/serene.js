import React from 'react';
import Serene from './pages/Serene';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<Serene />, document.getElementById('app'));
}

module.exports = Serene;
