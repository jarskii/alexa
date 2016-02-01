import React, {Component} from 'react';
import Wrapper from './Additional';

const description = (
  <div>
    <p>
      Профессиональный монитор для организации видеоконтроля TRANSVIDEO
    </p>
    <div className="LayoutRowSeparator"></div>
    <div className="LayoutRowTextCaption">
      <strong>
        Питание
      </strong>
    </div>
    <p className="LayoutRowPoint">
      5-36 VDC
    </p>
    <p className="LayoutRowPoint">
      Power consumption 6 Watts
    </p>
    <div className="LayoutRowSeparator"></div>
    <div className="LayoutRowTextCaption"><strong>Запись</strong></div>
    <p className="LayoutRowPoint">
      SD cards class10 32 Gb maximum
    </p>
    <div className="LayoutRowSeparator"></div>
    <div className="LayoutRowTextCaption"><strong>Соединение</strong></div>
    <p className="LayoutRowPoint">
      One Lemo 5 for Power and CAN bus
    </p>
    <div className="LayoutRowSeparator"></div>
    <div className="LayoutRowTextCaption"><strong>Дисплей</strong></div>
    <p className="LayoutRowPoint">
      1280x720 4.7” OLED
    </p>
    <div className="LayoutRowSeparator"></div>
    <div className="LayoutRowTextCaption"><strong>Другие спецификации</strong></div>
    <p className="LayoutRowPoint">
      Рабочая температура -25°C +45°C
    </p>
    <p className="LayoutRowPoint">
      Температура хранения -30°C +50°C
    </p>
    <p className="LayoutRowPoint">
      Rec-on-SDI on ARRI flag
    </p>
    <p className="LayoutRowPoint">
      Генерация PDF отчётов
    </p>
    <p className="LayoutRowPoint">
      Погодоустойчивый
    </p>
    <p className="LayoutRowPoint">
      Вес 200 гр.
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
        mainImg='transvideo_1.jpeg'
        title='Аренда TRANSVIDEO'
        description={description}
      />
    )
  }
};