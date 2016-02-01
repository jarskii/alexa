import React from 'react';
import Tvlogic from './pages/Tvlogic';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<Tvlogic />, document.getElementById('app'));
}

module.exports = Tvlogic;
