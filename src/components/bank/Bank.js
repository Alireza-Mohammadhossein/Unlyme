import React, { useState } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { accounts, accountsHistory } from '../../mocks/mocks';
import CloudBlock from '../common/cloud-block/CloudBlock';
import DateSelectionPopup from '../common/date-selection-popup/DateSelectionPopup';
import SegmentedControl from '../common/segmented-control/SegmentedControl';
import CustomSelect from '../common/custom-select/CustomSelect';

const TYPE_OF_TRANSACTION_FILTER_0 = 0;
const TYPE_OF_TRANSACTION_FILTER_1 = 1;
const TYPE_OF_TRANSACTION_FILTER_2 = 2;

const Bank = () => {

  const [dateSelectionPopupIsShowedForDateFrom, setDateSelectionPopupIsShowedForDateFrom] = useState(false);
  const [dateSelectionPopupIsShowedForDateTo, setDateSelectionPopupIsShowedForDateTo] = useState(false);

  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  const [typeOfTransactionFilter, setTypeOfTransactionFilter] = useState(TYPE_OF_TRANSACTION_FILTER_0);

  const accountsOptions = accounts.map(account => ({ value: account.id, label: account.cardNumber }));
  const [accountsFilter, setAccountsFilter] = useState(accounts.map(account => account.id));

  const [appliedFilter, setAppliedFilter] = useState(null);

  const applyFilter = () => {
    setAppliedFilter({
      accountsFilter,
      dateFrom,
      dateTo,
      typeOfTransactionFilter,
    });
  };

  const accountsHistoryFiltered =
    appliedFilter != null
      ? accountsHistory.filter(
          item =>
            (appliedFilter.accountsFilter.length === 0 || appliedFilter.accountsFilter.includes(item.accountId)) &&
            (appliedFilter.dateFrom !== null ? item.created_at >= appliedFilter.dateFrom.unix() : true) &&
            (appliedFilter.dateTo !== null ? item.created_at <= appliedFilter.dateTo.unix() : true) &&
            (appliedFilter.typeOfTransactionFilter === TYPE_OF_TRANSACTION_FILTER_1 ? item.amount > 0 : true) &&
            (appliedFilter.typeOfTransactionFilter === TYPE_OF_TRANSACTION_FILTER_2 ? item.amount < 0 : true)
        )
      : accountsHistory;

  return (
    <>
      <div className="container">
        <h1>Bank</h1>
        <div className="row">
          <div className="services__bank-page_accounts">
            <CloudBlock
              title="Accounts"
              rightButtonTitle="Add an account"
              mdiIcon="credit_card"
              iconContainerColor="blue"
              rightButtonAction={() => alert('s')}
              content={accounts.map((card, index) => {
                const colors = ['light-orange', 'light-purple', 'light-green'];
                return (
                  <>
                    <div key={card.id} className="services__bank_card services__bank-page_card">
                      <div className={`services__bank_card-currency services__bank_card-currency--${colors[index % 3]}`}>
                        {card.currency}
                      </div>
                      <div className="services__bank_balance">{card.balance}</div>
                      <div className="services__bank_balance-text">Balance</div>
                      <div className="services__bank_card-number">{card.cardNumber}</div>
                    </div>
                    {index !== accounts.length - 1 && <div className="services__bank-page_card-separator" />}
                  </>
                );
              })}
            />
          </div>
          <div className="site-horizontal-separator" />
          <div className="services__bank-page_accounts-history">
            <CloudBlock
              title="Transaction history"
              mdiIcon="shopping_bag"
              iconContainerColor="red"
              content={
                <div className="row">
                  <div className="col-7">
                    {_.map(
                      _.groupBy(accountsHistoryFiltered, item => moment.unix(item.created_at).format('DD.MM.Y')),
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
                  <div className="col-5" style={{ position: 'relative' }}>
                    <div className="services__bank-page_h-separator" />
                    <div className="cloud-block__header">
                      <div className="cloud-block__header_icon-container cloud-block__header_icon-container--orange">
                      <i className='menu__row_icon material-icons' style={{color: 'white'}}>
                        filter_list
                      </i>
                      </div>
                      <div className="cloud-block__header_title">Filters</div>
                    </div>
                    <div className="cloud-block__content">
                      <div className="site-input-label">Accounts</div>
                      <CustomSelect
                        onChange={v => setAccountsFilter(v.map(o => o.value))}
                        value={_.filter(accountsOptions, option => accountsFilter.includes(option.value))}
                        placeholder="Select"
                        isMulti
                        options={accountsOptions}
                      />
                      <div className="site-input-label mt-2">Type of transaction</div>
                      <SegmentedControl
                        value={typeOfTransactionFilter}
                        options={[
                          { value: TYPE_OF_TRANSACTION_FILTER_0, label: 'All' },
                          { value: TYPE_OF_TRANSACTION_FILTER_1, label: 'Incoming' },
                          { value: TYPE_OF_TRANSACTION_FILTER_2, label: 'Outgoing' },
                        ]}
                        onChange={setTypeOfTransactionFilter}
                      />
                      <div className="site-input-label mt-2">Date of operation</div>
                      <div className="row">
                        <div className="col-6 services__bank-page_date-col">
                          <span className="note">from</span>
                          <input
                            className="site-input"
                            onChange={() => {}}
                            value={dateFrom ? dateFrom.format('DD.MM.Y') : ''}
                            onFocus={() => setDateSelectionPopupIsShowedForDateFrom(true)}
                            placeholder=""
                          />
                        </div>
                        <div className="col-6 services__bank-page_date-col">
                          <span className="note">to</span>
                          <input
                            className="site-input"
                            onChange={() => {}}
                            value={dateTo ? dateTo.format('DD.MM.Y') : ''}
                            onFocus={() => setDateSelectionPopupIsShowedForDateTo(true)}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <button className="btn btn--transparent-blue mt-2" onClick={applyFilter}>
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <DateSelectionPopup
        value={dateFrom ? dateFrom.toDate() : null}
        onChange={val => {
          setDateFrom(moment(val).startOf('day'));
          setDateSelectionPopupIsShowedForDateFrom(false);
        }}
        visible={dateSelectionPopupIsShowedForDateFrom}
        onClose={() => setDateSelectionPopupIsShowedForDateFrom(false)}
      />
      <DateSelectionPopup
        value={dateTo ? dateTo.toDate() : null}
        onChange={val => {
          setDateTo(moment(val).endOf('day'));
          setDateSelectionPopupIsShowedForDateTo(false);
        }}
        visible={dateSelectionPopupIsShowedForDateTo}
        onClose={() => setDateSelectionPopupIsShowedForDateTo(false)}
      />
    </>
  );
};

export default Bank;
