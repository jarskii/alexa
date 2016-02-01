import React from 'react';
import News from './pages/News';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<News />, document.getElementById('app'));
}

module.exports = News;
