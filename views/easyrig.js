import React from 'react';
import Easyrig from './pages/Easyrig';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<Easyrig />, document.getElementById('app'));
}

module.exports = Easyrig;
