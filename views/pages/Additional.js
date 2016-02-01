import React, {Component} from 'react';
import Image from './../components/Image/index.js';
import Input from './../components/Input/index.js';
import Checkbox from './../components/Checkbox/index.js';
import PhoneIcon from './../components/Icons/PhoneIcon.js';
import CheckIcon from './../components/Icons/CheckIcon.js';
import CrossIcon from './../components/Icons/CrossIcon.js';
import classNames from 'classnames';
import Player from 'react-player';
import request from 'superagent';
import qs from '../lib/qs';

let animatedScrollTo;

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return [curtop];
  }
}

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenVariant: null
    };
  }

  componentDidMount() {
    animatedScrollTo = require('animated-scrollto');
  }

  onHandle() {
    let positionFeedbackBlock  = findPos(this.refs.feedbackForm) - 100;

    if (positionFeedbackBlock < 200) {
      positionFeedbackBlock = 1000;
    }

    animatedScrollTo(
      document.body,
      positionFeedbackBlock,
      500
    );
  }
  validate() {
    const {name, email} = this.refs;

    if (!name.state.value || name.state.value.length < 2) {
      name.setState({
        error: "Добавьте имя"
      })
      return false;
    } else if (!email.state.value || email.state.value.length < 4) {
      email.setState({
        error: "Оставьте контактную информацию"
      })
      return false;
    }

    return true;
  }
  onSubmit() {

    if (this.validate()) {
      const {name, email, checkFirst, checkSecond, checkThird, date} = this.refs;

      const checkAdditional = [];

      checkFirst.state.checked && checkAdditional.push('Камера + Техник');
      checkSecond.state.checked && checkAdditional.push('Freefly MOVI');
      checkThird.state.checked && checkAdditional.push('Объективы Ultra Prime');

      request.post('/scripts/form-u205.php')
        .type('form')
        .send(
          qs.stringify({
            custom_U206:  name.state.value,
            custom_U253: email.state.value,
            custom_U293: checkAdditional,
            custom_U327: date.state.value
          })
        )
        .end((err, res) => {
          if (err) {
            this.setState({
              status: {
                type: 'error',
                msg: 'Оставить заявку не удалось. Попробуйте снова'
              }
            })

            return false;
          }
          const response = JSON.parse(res.text);

          if (response.FormResponse.success) {
            this.setState({
              status: {
                type: 'success',
                msg: 'Мы перезвоним Вам в течение 10 минут'
              }
            })
          } else {
            this.setState({
              status: {
                type: 'error',
                msg: 'Оставить заявку не удалось. Попробуйте снова'
              }
            })
          }
        })
    }
  }

  onHoverCheckbox(text) {
    this.setState({
      choosenVariant: text,
      showHint: true
    });

    clearTimeout(this.timeout);
  }

  onLeaveCheckbox() {

    this.setState({
      showHint: false
    })

    this.timeout = setTimeout(() => {
      const {showHint} = this.state;

      if (!showHint) {
        this.setState({
          choosenVariant: null
        })
      }
    }, 300);
  }

  render() {
    const {choosenVariant, showHint, status} = this.state;
    const {mainImg, title, description, kit, price} = this.props;

    return (
      <div className="Layout">
        <div className="LayoutRow">
          <h1 className="LayoutRowTitle LayoutRowTitle--Short">
            <div className="LayoutRowTitleText">
              {title}
            </div>
            <div onClick={this.onHandle.bind(this)} className="LayoutRowButton">Взять в аренду</div>
          </h1>
          <Image
            className="LayoutRowImage"
            src={`images/${mainImg}`}
            title={title}
          />
          <div className="LayoutRowSeparator"></div>
          <div className="LayoutRowText LayoutRowText-Top">
            {description}
          </div>
          <div className="LayoutRowSeparator"></div>
        </div>
        {
          kit
          &&
          <div className="LayoutRow">
            {kit}
            <div className="LayoutRowSeparator"></div>
          </div>
        }
        <div className="LayoutRow">
          <div className="LayoutRowCaption">Наши телефоны:</div>
          <div className="LayoutRowPhones">
            <PhoneIcon />
            <a className="LayoutRowPhonesLink" href="tel:+79032991410">+7 925 275 98 64</a>
            <a className="LayoutRowPhonesLink LayoutRowPhonesLink--Middle" href="tel:+79264674499">+7 926 467 44 99</a>
            <a className="LayoutRowPhonesLink" href="tel:+79032991410">+7 903 299 14 10</a>
          </div>
          <div className="LayoutRowSeparator"></div>
        </div>
        {
          price
          &&
          <div className="LayoutRow LayoutRow--Right">
            <div className="LayoutRowPrice">
              Стоимость: {price} руб. за смену.
            </div>
          </div>
        }
        <div ref="feedbackForm" className="LayoutRow LayoutRow--Right">
          <div className="LayoutRowCamera">
            <Image
              className="LayoutRowCameraImage"
              src={`images/${mainImg}`}
              title="Alexa Mini"
            />
          </div>
          <div className="LayoutRowForm">
            <div className="LayoutRowFormCaption">
              Оставьте контактные данные и мы свяжемся с вами в течение 10 минут
            </div>
            <Input
              ref="name"
              label="Имя"
              placeholder="Иван Иванов"
            />
            <Input
              ref="email"
              label="Телефон или E-mail"
              placeholder="+79258937383"
            />
            <Input
              ref="date"
              label="Когда съемка ?"
              placeholder="Сообщите нам дату и время"
            />
            <div onClick={this.onSubmit.bind(this)} className="LayoutRowButton LayoutRowButton--Left">Заказать</div>
            {
              status
              &&
              <div className="LayoutRowButtonMsg">
                {
                  status.type === 'success'
                    ?
                    <CheckIcon fill="#85E080" />
                    :
                    <CrossIcon fill="#EDC84C"  />
                }
                <div className="LayoutRowButtonMsgText">
                  {status.msg}
                </div>
              </div>
            }
            <div className="Clear"></div>
          </div>
          <div className="LayoutRowSeparator"></div>
        </div>
        <div className="LayoutRow">
          <Image
            className="LayoutRowBottomImage"
            src="images/4.jpg"
            title="Объективы Alexa Mini"
          />
        </div>
      </div>
    )
  }
};
