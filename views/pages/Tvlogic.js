import React, {Component} from 'react';
import Wrapper from './Additional';

const description = (
  <div>
    <p>
      Профессиональный монитор для организации видеоконтроля TVLogic
    </p>
  </div>
)


export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper
        mainImg='LVM-212W-PERS.gif'
        title='Аренда TVLogic'
        description={description}
      />
    )
  }
};