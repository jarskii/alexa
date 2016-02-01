import React from 'react';
import Teradek from './pages/Teradek';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<Teradek />, document.getElementById('app'));
}

module.exports = Teradek;
