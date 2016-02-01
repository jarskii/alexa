import React, {Component} from 'react';

import Background from '../components/Background';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Preved medved!');
  }

  render() {
    return (
      <div className="Layout">
        <div className="LayoutRow">
          <div className="NewsHeader">
            <Background className="NewsHeaderBg" image="../images/alexa_news_bg.jpg" />
            <div className="NewsHeaderTitle">Новости киноиндустрии</div>
          </div>
        </div>
      </div>
    )
  }
};
