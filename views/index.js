import React from 'react';
import Layout from './pages/Layout';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<Layout />, document.getElementById('app'));
}

module.exports = Layout;
