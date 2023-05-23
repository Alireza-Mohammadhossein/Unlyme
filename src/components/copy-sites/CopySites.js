import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CloudPage from '../pages/cloud-page/CloudPage';
import Popup from "../common/popup/Popup";

const CopySites = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [popupVisible, setPopupVisible] = useState(null);

  return (
    <div className="page-container">
      <h1>Copy sites</h1>
      <Swiper
        style={{ overflow: "hidden" }}
        allowTouchMove={false}
        onSwiper={setSwiperInstance}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: false }}
      >
        <SwiperSlide key="start">
          <CloudPage
            iconContainerColor="purple"
            mdiIcon="content_copy"
            title="Copy any site in a few minutes and modify it for yourself"
            content={
              <>
                Find out how it works right now
                <div className="services__sites-copying-page_input-container">
                  <input
                    className={`site-input ${error != null && "error"}`}
                    placeholder="Enter the site address"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <button
                    className="btn"
                    style={{ marginLeft: 50 }}
                    onClick={() => {
                      if (value.length === 0) {
                        setError("The field cannot be empty");
                      } else {
                        setError(null);
                        swiperInstance.slideTo(1);
                      }
                    }}
                  >
                    Copy
                  </button>
                  {error != null && (
                    <span className="site-input-error-label">{error}</span>
                  )}
                </div>
              </>
            }
          />
          <div className="site-vertical-separator" />
          <CloudPage
            iconContainerColor="green"
            mdiIcon="paid"
            title="Plans and opportunities"
            content={
              <table className="site-table site-table--first-td-text-left">
                <tbody>
                  <tr className="text-blue site-table__tr--silver">
                    <td>Opportunities</td>
                    <td>Free</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>Copy any sites</td>
                    <td className="text-orange" style={{ fontSize: "1.4em" }}>
                      +
                    </td>
                    <td className="text-orange" style={{ fontSize: "1.4em" }}>
                      +
                    </td>
                  </tr>
                  <tr>
                    <td>Data retention period</td>
                    <td>24 hrs</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>The ability to host the copied site on the hosting</td>
                    <td className="text-gray" style={{ fontSize: "1.4em" }}>
                      &ndash;
                    </td>
                    <td className="text-orange" style={{ fontSize: "1.4em" }}>
                      +
                    </td>
                  </tr>
                  <tr>
                    <td>The ability to save site files to a computer</td>
                    <td className="text-gray" style={{ fontSize: "1.4em" }}>
                      &ndash;
                    </td>
                    <td className="text-orange" style={{ fontSize: "1.4em" }}>
                      +
                    </td>
                  </tr>
                  <tr>
                    <td>The ability to link your domain to the site</td>
                    <td className="text-gray" style={{ fontSize: "1.4em" }}>
                      &ndash;
                    </td>
                    <td className="text-orange" style={{ fontSize: "1.4em" }}>
                      +
                    </td>
                  </tr>
                  <tr className="site-table__tr--silver">
                    <td>Cost</td>
                    <td>Free</td>
                    <td>10 CHF per month</td>
                  </tr>
                  <tr className="site-table__tr--border-none">
                    <td>&nbsp;</td>
                    <td className="text-blue">This is your current plan</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => setPopupVisible(true)}
                      >
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
            content={
              <iframe
                title="copy-sites"
                src={`https://test.site.pro/?import=${value}`}
                className="services__site-builder-page_frame"
              />
            }
          />
        </SwiperSlide>
      </Swiper>
      {popupVisible && (
        <Popup
          onClose={() => setPopupVisible(false)}
          content="Plans selection blocked by administrator"
        />
      )}
    </div>
  );
};

export default CopySites;
