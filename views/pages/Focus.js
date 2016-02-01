import React, {Component} from 'react';
import Wrapper from './Additional';

const description = (
  <div>
    <p>
      Одноканальное устройство радиоуправлением фокусом или диафрагмой ARRI SXU-1.
    </p>
    <p>
      Совместимо с камерами ALEXA PLUS, а также любыми камерами с использованием блока UMC-3A
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
        mainImg='arri-wireless-single-axis-unit-sxu-1.jpg'
        title='Аренда Focus'
        price="2500"
        description={description}
      />
    )
  }
};
