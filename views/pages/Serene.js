import React, {Component} from 'react';
import Wrapper from './Additional';

const description = (
  <div>
    <p>
      Система вертикальной стабилизации SERENE, разработанная компанией Flowcine и представленная осенью 2014 года, дополняет и расширяет возможности Easyrig. SERENE – это запатентованная двухосевой рукав, который крепится на верхнюю штангу Easyrig и стабилизирует вибрации и ошибки движения по вертикали, которые происходят в процессе бега или ходьбы с Easyrig. SERENE справляется и с боковыми вибрациями.
    </p>
    <p>
      Обратите внимание: система SERENE предназначена для камерных комплектов весом от 6 до 19,5 кг. Перенагрузка системы может вывести ее из строя, а использовать систему с камерными комплектами меньшего веса – неэффективно. В то же время большинство современных систем стабилизации (Freefly MoVI, DJI RONIN, DJI RONIN-M), укомплектованных камерами Blackmagic, RED или ARRI в конечном итоге имеют именно этот вес в сборе. Точная настройка системы происходит легко и без использования каких-либо дополнительных инструментов.
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
        mainImg='flowcine_fc_serene_serene_2_axis_spring_arm_1086551.jpg'
        title='Аренда SERENE'
        description={description}
      />
    )
  }
};