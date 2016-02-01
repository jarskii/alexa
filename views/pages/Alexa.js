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
          console.log('Response', res);

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

    return (
      <div className="Layout">
        <div className="LayoutRow">
          <h1 className="LayoutRowTitle LayoutRowTitle--Short">
            <div className="LayoutRowTitleText">
              Камера ARRI ALEXA mini
            </div>
            <div onClick={this.onHandle.bind(this)} className="LayoutRowButton">Взять в аренду</div>
          </h1>
          <Image
            className="LayoutRowImage"
            src="images/arri_alexa_mini_hero_2.png"
            title="Камера ARRI ALEXA mini"
          />
          <div className="LayoutRowSeparator"></div>
          <div className="LayoutRowText LayoutRowText-Top">
            Основное преимущество камеры <strong>ALEXA mini</strong> включает в себя компактность, легковесность и конечно непревзойденное качество изображения, что кстати сделало систему <strong>ARRI ALEXA</strong> золотым стандартом своей отрасли.
          </div>
          <div className="LayoutRowSeparator"></div>
          <div className="LayoutRowText LayoutRowText-Middle">
            Новая компактная Alexa последнее слово кинопромышленности. Легкий карбоновый корпус, сверхпрочное титановое крепление матрицы и надежное титановое PL-крепление, возможность писать изображение в ProRes до 200 кадров в секунду, анонсированная опция записи в формате ARRIRAW до 30 кадров в секунду, а самое главное "та самая" картинка, которая делает продукцию Arri достойными приемниками старых-добрых пленочных камер это лишь то малое, что можно сказать в восхищенном комментарии к камере <strong>Arri Alexa mini</strong>.
          </div>
          <div className="LayoutRowSeparator"></div>
        </div>
        <div className="LayoutRow">
          <h2 className="LayoutRowCaption">Технические характеристики Arri Alexa mini:</h2>
          <ul className="LayoutRowList">
            <li>Длина 185мм</li>
            <li>Электронный обтюратор (от 5 до 356 градусов)</li>
            <li>Встроенные фильтры ND 0.6, 1.2, 2.1</li>
          </ul>
          <ul className="LayoutRowList">
            <li>Ширина 125мм</li>
            <li>Вес (тушка + PL-крепление) - всего 2,3 кг</li>
            <li>Диапазон 14+ стопов</li>
            <li>Медиа CFast 2.0</li>
          </ul>
          <ul className="LayoutRowList">
            <li>Высота 140мм</li>
            <li>Матрица 35мм ARRI ALEV III CMOS</li>
            <li>Базовая ISO 800</li>
            <li>Питание Lemo 8-пиновый. 10.5-34V DC. </li>
          </ul>
          <div className="LayoutRowSeparator"></div>
        </div>
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
        <div className="LayoutRow LayoutRow--Right">
          <div className="LayoutRowLogo ">
            <Image
              className="LayoutRowLogoImage"
              src="images/logo.jpg"
              title="ARRI"
            />
          </div>
        </div>
        <div ref="feedbackForm" className="LayoutRow LayoutRow--Right">
          <div className="LayoutRowCamera">
            <Image
              className="LayoutRowCameraImage"
              src="images/arri_alexa_mini.jpg"
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
            <div className="LayoutRowControls">
              <div className="LayoutRowFormLine">
                <Checkbox
                  ref="checkFirst"
                  className="LayoutRowFormCheckbox"
                  label="Камера + Техник"
                  caption={{
                      title: "24000 Р",
                      caption: "За смену 12 часов"
                    }}
                  onHover={this.onHoverCheckbox.bind(this)}
                  onLeave={this.onLeaveCheckbox.bind(this)}
                />
              </div>
              <div className="LayoutRowFormLine">
                <Checkbox
                  ref="checkSecond"
                  className="LayoutRowFormCheckbox"
                  label="Freefly MOVI"
                  caption={{
                      title: "30000 Р",
                      caption: "За смену 12 часов"
                    }}
                  onHover={this.onHoverCheckbox.bind(this)}
                  onLeave={this.onLeaveCheckbox.bind(this)}
                />
              </div>
              <div className="LayoutRowFormLine">
                <Checkbox
                  ref="checkThird"
                  className="LayoutRowFormCheckbox"
                  label="Объективы  Ultra Prime"
                  caption={{
                      title: "1500 Р",
                      caption: "За один объектив в смену"
                    }}
                  onHover={this.onHoverCheckbox.bind(this)}
                  onLeave={this.onLeaveCheckbox.bind(this)}
                />
              </div>
              <div className={
                  classNames({
                    "LayoutRowControlsInfo": true,
                    "LayoutRowControlsInfo--Show": showHint
                  })
                }>
                {
                  choosenVariant
                  &&
                  <div>
                    <div className="LayoutRowControlsInfoTitle">{choosenVariant.title}</div>
                    {choosenVariant.caption}
                  </div>
                }


              </div>
            </div>
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
