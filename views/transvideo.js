import React from 'react';
import Transvideo from './pages/Transvideo';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<Transvideo />, document.getElementById('app'));
}

module.exports = Transvideo;
