import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';
import { accounts, accountsHistory } from '../../../../mocks/mocks';
import CloudBlock from '../../../common/cloud-block/CloudBlock';

const Bank = () => {
  const navigate = useNavigate();
  const content = (
    <>
      <div className="services__bank_cards">
        {accounts.map((card, index) => {
          const colors = ['light-orange', 'light-purple', 'light-green'];
          return (
            <div key={card.id} className="services__bank_card">
              <div className={`services__bank_card-currency services__bank_card-currency--${colors[index % 3]}`}>{card.currency}</div>
              <div className="services__bank_balance">{card.balance}</div>
              <div className="services__bank_balance-text">Balance</div>
              <div className="services__bank_card-number">{card.cardNumber}</div>
            </div>
          );
        })}
      </div>
      <div className="services__bank_history">
        {_.map(
          _.groupBy(accountsHistory, item => moment.unix(item.created_at).format('DD.MM.Y')),
          (data, date) => {
            return (
              <div key={date} className="services__bank_history-section">
                <div className="services__bank_history-section-date">{date}</div>
                {data.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <div className="services__bank_history-item">
                      <div>
                        <div className="services__bank_history-item-title">{item.title}</div>
                        <div className="services__bank_history-item-subtitle">{item.subtitle}</div>
                      </div>
                      <div className={item.amount > 0 ? 'text-green' : 'text-red'}>
                        {item.amount > 0 ? `+${item.amount}` : `${item.amount}`} {item.currency}
                      </div>
                    </div>
                    {index !== data.length - 1 && <div className="services__bank_history-item-separator" />}
                  </React.Fragment>
                ))}
              </div>
            );
          }
        )}
      </div>
    </>
  );

  return (
    <CloudBlock
      title='Bank'
      // rightButtonAction={() => history.push('/services/bank')}
      rightButtonAction={() => navigate('/services/bank')}
      content={content}
      infoContent="s"
      mdiIcon="monetization_on"
      iconContainerColor="purple"
    />
  );
};

export default Bank;
