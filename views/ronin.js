import React from 'react';
import Ronin from './pages/Ronin';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<Ronin />, document.getElementById('app'));
}

module.exports = Ronin;
