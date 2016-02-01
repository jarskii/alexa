import React from 'react';
import Alexa from './pages/Alexa';
import {render} from 'react-dom';

if (typeof document !== 'undefined') {
  render(<Alexa />, document.getElementById('app'));
}

module.exports = Alexa;
