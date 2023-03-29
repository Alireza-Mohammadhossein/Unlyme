import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import SigninFormLoginStage from './SigninFormLoginStage';
import pic from '../../../assets/images/auth-pic/1.jpg';

function SigninForm() {

  const temp = [{ src: '1', title: 'The Matterhorn ', from: 'Switzerland' }];

  const slides = temp.map(item => (
    <div key={item.src} className="signin__bg-swiper_slide" style={{ backgroundImage: `url(${pic})` }}>
      <div className="signin__bg-swiper_slide-info">
        <div className="fix">
          <div className="signin__bg-swiper_slide-info-block">
            <div style={{ marginBottom: '7px' }}>{item.title}</div>
            <div>{item.from}</div>
          </div>
        </div>
      </div>
    </div>
  ));


  return (
    <div className="signin">
      <div className="fix signin__inner-container">
        <div className="signin__language"></div>
      </div>
      <div className="fix">
        <table className="signin__main-table signin__inner-container">
          <tbody>
            <tr>
              <td>
                <div className="cloud signin__block">
                  <div className="signin__logo">WayWe</div>
                  <SigninFormLoginStage />
                </div>
              </td>
              <td>
                <div className="signin__offer">
                  <div className="signin__offer_main">All-in-one Platform for&nbsp;Entrepreneurs</div>
                  <div>Apps & Services for&nbsp;creating and developing small and&nbsp;micro business.</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="signin__bg-swiper_nav">
        <div className="fix">
          <div className="signin__bg-swiper_prev" />
          <div className="signin__bg-swiper_next" />
        </div>
      </div>
      <div className="signin__footer">
        <div className="fix">
          <span>Copyright &copy; {moment().format('Y')} WayWe. All rights reserved.</span>
        </div>
      </div>
      <div className={`swiper-container signin__bg-swiper`}>
        {slides}
      </div>
    </div>
  );
}


export default SigninForm;
