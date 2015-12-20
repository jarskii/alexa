import React from 'react';
import Layout from './Layout';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<Layout />, document.getElementById('app'));
}

module.exports = Layout;
