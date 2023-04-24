import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CloudPage from '../cloud-page/CloudPage';
import Popup from '../common/popup/Popup';

const SiteBuilder = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [popupVisible, setPopupVisible] = useState(null);

  return (
    <div className="page-container">
      <h1>Site builder</h1>
      <Swiper
        style={{ overflow: 'hidden' }}
        allowTouchMove={false}
        onSwiper={setSwiperInstance}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: false }}
      >
        <SwiperSlide key="start">
          <CloudPage
            iconContainerColor="orange"
            mdiIcon="web"
            title="Create your own unique website or online store"
            content={
              <div>
                Find out how it works right now
                <button
                  className="btn"
                  onClick={() => {
                    if (swiperInstance) {
                      swiperInstance.slideTo(1);
                    }
                  }}
                  style={{ marginLeft: 50 }}
                >
                  Create a website
                </button>
              </div>
            }
          />
          <div className="site-vertical-separator" />
          <CloudPage
            title="Plans and opportunities"
            iconContainerColor="green"
            mdiIcon="paid"
            content={
              <table className="site-table site-table--first-td-text-left">
                <tbody>
                  <tr className="text-blue site-table__tr--silver">
                    <td>Opportunities</td>
                    <td>Free</td>
                    <td>Standard</td>
                    <td>Extended</td>
                  </tr>
                  <tr>
                    <td>Website creation</td>
                    <td className="text-orange" style={{ fontSize: '1.4em' }}>
                      +
                    </td>
                    <td className="text-orange" style={{ fontSize: '1.4em' }}>
                      +
                    </td>
                    <td className="text-orange" style={{ fontSize: '1.4em' }}>
                      +
                    </td>
                  </tr>
                  <tr>
                    <td>Creating an online store</td>
                    <td className="text-gray" style={{ fontSize: '1.4em' }}>
                      &ndash;
                    </td>
                    <td className="text-gray" style={{ fontSize: '1.4em' }}>
                      &ndash;
                    </td>
                    <td className="text-orange" style={{ fontSize: '1.4em' }}>
                      +
                    </td>
                  </tr>
                  <tr>
                    <td>Data retention period</td>
                    <td>24 hrs</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Template count</td>
                    <td>300</td>
                    <td>50</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>Placing the created site on hosting</td>
                    <td className="text-gray" style={{ fontSize: '1.4em' }}>
                      &ndash;
                    </td>
                    <td className="text-orange" style={{ fontSize: '1.4em' }}>
                      +
                    </td>
                    <td className="text-orange" style={{ fontSize: '1.4em' }}>
                      +
                    </td>
                  </tr>
                  <tr>
                    <td>Saving site files on your computer</td>
                    <td className="text-gray" style={{ fontSize: '1.4em' }}>
                      &ndash;
                    </td>
                    <td className="text-orange" style={{ fontSize: '1.4em' }}>
                      +
                    </td>
                    <td className="text-orange" style={{ fontSize: '1.4em' }}>
                      +
                    </td>
                  </tr>
                  <tr>
                    <td>Binding your domain to the site</td>
                    <td className="text-gray" style={{ fontSize: '1.4em' }}>
                      &ndash;
                    </td>
                    <td className="text-orange" style={{ fontSize: '1.4em' }}>
                      +
                    </td>
                    <td className="text-orange" style={{ fontSize: '1.4em' }}>
                      +
                    </td>
                  </tr>
                  <tr className="site-table__tr--silver">
                    <td>Cost</td>
                    <td>Free</td>
                    <td>1 CHF per month</td>
                    <td>10 CHF per month</td>
                  </tr>
                  <tr className="site-table__tr--border-none">
                    <td>&nbsp;</td>
                    <td className="text-blue">This is your current plan</td>
                    <td>
                      <button className="btn" onClick={() => setPopupVisible(true)}>
                        Apply
                      </button>
                    </td>
                    <td>
                      <button className="btn" onClick={() => setPopupVisible(true)}>
                        Apply
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            }
          />
        </SwiperSlide>
        <SwiperSlide key="1">
          <CloudPage
            mdiIcon="keyboard_arrow_left"
            mdiIconColor="black"
            iconContainerColor="silver"
            iconAction={() => {
              if (swiperInstance) {
                swiperInstance.slideTo(0);
              }
            }}
            title="Back to plans"
            content={<iframe title='sites' src="https://builder.waywe.ch/ru/brand/606112/" className="services__site-builder-page_frame" />}
          />
        </SwiperSlide>
      </Swiper>
      {popupVisible && <Popup onClose={() => setPopupVisible(false)} content="Plans selection blocked by administrator" />}
    </div>
  );
};

export default SiteBuilder;
