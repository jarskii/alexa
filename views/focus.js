import React from 'react';
import Focus from './pages/Focus';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<Focus />, document.getElementById('app'));
}

module.exports = Focus;
