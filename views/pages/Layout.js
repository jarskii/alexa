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
        </div>
        <div className="LayoutRow">
          <div className="LayoutRowCaption">Комплектующие:</div>
          <ul className="LayoutGoodsList">
            <li className="LayoutGoodsListItem">
              <a className="LayoutGoodsListItemLink" href="/easyrig/">
                <Image
                  className="LayoutGoodsListItemImg"
                  src="images/Easyrig_ERIG_500_3_Cinema_3_500N.jpg"
                  title="Easyrig Cinema 3"
                />
                <div className="LayoutGoodsListItemTitle">Easyrig</div>
              </a>
            </li>
            <li className="LayoutGoodsListItem">
              <a className="LayoutGoodsListItemLink"  href="/focus/">
                <Image
                  className="LayoutGoodsListItemImg"
                  src="images/arri-wireless-single-axis-unit-sxu-1.jpg"
                  title="Focus"
                />
                <div className="LayoutGoodsListItemTitle">Focus</div>
              </a>
            </li>
            <li className="LayoutGoodsListItem">
              <a className="LayoutGoodsListItemLink"  href="/ronin/">
                <Image
                  className="LayoutGoodsListItemImg"
                  src="images/dji_ronin_3_axix_gimbal_stabilizer_1046473.jpg"
                  title="DJI RONIN"
                />
                <div className="LayoutGoodsListItemTitle">Ronin</div>
              </a>
            </li>
            <li className="LayoutGoodsListItem">
              <a className="LayoutGoodsListItemLink"  href="/serene/">
                <Image
                  className="LayoutGoodsListItemImg"
                  src="images/flowcine_fc_serene_serene_2_axis_spring_arm_1086551.jpg"
                  title="SERENE"
                />
                <div className="LayoutGoodsListItemTitle">Serene</div>
              </a>
            </li>
            <li className="LayoutGoodsListItem">
              <a className="LayoutGoodsListItemLink"  href="/teradek/">
                <Image
                  className="LayoutGoodsListItemImg"
                  src="images/NEW_bolt_2000_large_1024x1024.png"
                  title="TERADEK"
                />
                <div className="LayoutGoodsListItemTitle">TERADEK</div>
              </a>
            </li>
            <li className="LayoutGoodsListItem">
              <a className="LayoutGoodsListItemLink"  href="/transvideo/">
                <Image
                  className="LayoutGoodsListItemImg"
                  src="images/transvideo_1.jpeg"
                  title="Transvideo"
                />
                <div className="LayoutGoodsListItemTitle">Transvideo</div>
              </a>
            </li>
            <li className="LayoutGoodsListItem">
              <a className="LayoutGoodsListItemLink"  href="/tvlogic/">
                <Image
                  className="LayoutGoodsListItemImg"
                  src="images/LVM-212W-PERS.gif"
                  title="TVLogic"
                />
                <div className="LayoutGoodsListItemTitle">TVLogic</div>
              </a>
            </li>
          </ul>
          <div className="LayoutRowSeparator"></div>
        </div>
        <div className="LayoutRow">
          <h1 className="LayoutRowCaption">Аренда кинокамер ARRI Alexa Mini и комплектующих</h1>
          <div className="LayoutRowText">
            Специалисты компании постоянно следят за новинками рынка в области кинопроизводства. Наши съемочные комплекты камер систематически пополняются и обновляются новой съемочной техникой. Для поклонников компании Arri мы купили первую камеру этого брэнда. Arri Alexa Mini уже доступна для аренды в Москве в нашей компании!
          </div>
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
