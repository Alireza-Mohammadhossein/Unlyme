import React, { useState } from 'react';
import moment from 'moment';
import Popup from '../common/popup/Popup';

const Domains = () => {
  const [popupVisible, setPopupVisible] = useState(null);

  const headerColumns = [
    { id: 1, title: 'Domain', icon: 'domain', color: 'red' },
    { id: 2, title: 'State', icon: 'insert_chart_outline', color: 'orange' },
    { id: 3, title: 'Paid', icon: 'account_balance_wallet', color: 'green' },
    { id: 4, title: 'DNS', icon: 'dns', color: 'blue' },
    { id: 5, title: 'Action', icon: 'access_time', color: 'purple' },
  ];

  const data = [
    {
      id: 1,
      name: 'wwtest.ru',
      status: 'Delegated',
      paid_at: moment()
        .subtract(2, 'month')
        .add(1, 'year')
        .unix(),
      dns: ['ns1.multihost.ru', 'ns2.multihost.ru'],
    },
    {
      id: 2,
      name: 'bwwtest.ru',
      status: 'Delegated',
      paid_at: moment()
        .subtract(3, 'month')
        .add(1, 'year')
        .unix(),
      dns: ['ns3.multihost.ru', 'ns4.multihost.ru'],
    },
  ];

  return (
    <div className="container">
      <h1>Domains</h1>
      <div className="row">
        <div className="col-12">
          <div className="cloud-page services__domains-page">
            <div className="cloud-page__header services__domains-page_header">
              {headerColumns.map(col => (
                <div className="services__domains-page_col services__domains-page_header-col" key={col.id}>
                  <div className={`cloud-page__header_icon-container cloud-page__header_icon-container--${col.color}`}>
                      <i className='menu__row_icon material-icons' style={{ color: 'white' }}>
                          {col.icon}
                      </i>
                  </div>
                  <div className="cloud-page__header_title">{col.title}</div>
                </div>
              ))}
            </div>
            <div className="cloud-page__content">
              {data.map(item => (
                <div className="services__domains-page_row" key={item.id}>
                  <div className="services__domains-page_col">{item.name}</div>
                  <div className="services__domains-page_col">
                    <a href="/">{item.status}</a>
                  </div>
                  <div className="services__domains-page_col text">
                    <div>{moment.unix(item.paid_at).format('Y.MM.DD')}</div>
                    <div className="note">{moment.unix(item.paid_at).format('HH:mm:ss')}</div>
                  </div>
                  <div className="services__domains-page_col text">
                    {item.dns.map(name => (
                      <div>{name}</div>
                    ))}
                  </div>
                  <div className="services__domains-page_col" style={{ alignSelf: 'center' }}>
                    <button className="btn" onClick={() => setPopupVisible(true)}>
                      Extend
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {popupVisible && <Popup onClose={() => setPopupVisible(false)} content="Domain renewal is not required" />}
    </div>
  );
};

export default Domains;
