import React, {Component} from 'react';
import Wrapper from './Additional';

const description = (
  <div>
    <p>
      Teradek Bolt Pro 2000 2-ого поколения - беспроводная система передачи изображения с нулевой задержкой (меньше 1 м/с). Передача изображения на расстояние до 600 м.
      поступающий на вход видеопоток с разрешением до 1080p 4:2:2 FullHD. Работая в стандартнном разрешенном диапазоне частот 5ГГц по разработанному Teradek протоколу WSDI Pro™, беспроводная система Bolt для достижения оптимальной производительности в сложных радиочастотных средах использует технологию Dynamic Frequency Selection (DFS), которая позволяет динамически менять используемые радиочастотные каналы и минимизировать помехи. Передача изображения расстояние до 600 м. Возможность установки до 4-х приёмников. Теперь со встроенными LUT (Look Up Tables)
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
        mainImg='NEW_bolt_2000_large_1024x1024.png'
        title='Аренда Teradek Bolt Pro 2000'
        description={description}
      />
    )
  }
};