import React, { useState } from 'react';
import moment from 'moment';
// import { ASSETS_URL } from '../../types';
import CloudPage from '../pages/cloud-page/CloudPage';
import TabToolbar from '../services/components/tab-toolbar/TabToolbar';
import { receipts } from '../../mocks/mocks'; 
// import "./settings.scss"

const RECEIPTS_TAB_MONTH = 'RECEIPTS_TAB_MONTH';
const RECEIPTS_TAB_3_MONTH = 'RECEIPTS_TAB_3_MONTH';
const RECEIPTS_TAB_YEAR = 'RECEIPTS_TAB_YEAR';

const Settings = () => {

  const [receiptsTab, setReceiptsTab] = useState(RECEIPTS_TAB_MONTH);

  const employees = [
    { id: 1, name: 'Kailyn Lester', position: 'Accountant' },
    { id: 2, name: 'Isabelle Young', position: 'Manager' },
  ];

  const receiptsFiltered = receipts.filter(receipt => {
    if (receiptsTab === RECEIPTS_TAB_MONTH) {
      return (
        receipt.created_at >=
        moment()
          .subtract(1, 'month')
          .unix()
      );
    }
    if (receiptsTab === RECEIPTS_TAB_3_MONTH) {
      return (
        receipt.created_at >=
        moment()
          .subtract(3, 'month')
          .unix()
      );
    }
    if (receiptsTab === RECEIPTS_TAB_YEAR) {
      return (
        receipt.created_at >=
        moment()
          .subtract(1, 'year')
          .unix()
      );
    }
    return true;
  });

  return (
    <div className="page-container">
      <h1>Settings</h1>
      <div className="row row--space-between">
        <div className="col-5">
          <CloudPage
            title="Basic information"
            content={
              <div className="row row--space-between">
                <div className="settings__info_avatar" />
                <div className="settings__info_right text">
                  <div>
                    <div className="row row--space-between">
                      <b>Oliver Berger</b>
                      <span>Contract No. 32</span>
                    </div>
                    <div className="note">Oliver Berger GmbH</div>
                  </div>
                  <div className="mt-1">
                    <div>
                      Date of birth: <b>1983.04.22</b>
                    </div>
                    <div>
                      Country: <b>CH</b>
                      <span className="settings__info_language">
                        Language: <b>English</b>
                      </span>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div>
                      E-mail: <b>oliverberger.ch@gmail.com</b>
                    </div>
                    <div>
                      Phone number: <b>+41 41 508 76 53</b>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="col-4">
          <CloudPage
            title="Information about receipts and write-offs"
            content={
              <>
                <TabToolbar
                  value={receiptsTab}
                  options={[
                    { value: RECEIPTS_TAB_MONTH, label: 'Month' },
                    { value: RECEIPTS_TAB_3_MONTH, label: '3 month' },
                    { value: RECEIPTS_TAB_YEAR, label: 'Year' },
                  ]}
                  onChange={setReceiptsTab}
                />
                {receiptsFiltered.map(receipt => (
                  <div key={receipt.id} className="settings__receipt text">
                    <div className="row">
                      {receipt.name}
                      <span>{receipt.value}</span>
                    </div>
                    <div className="note">{moment.unix(receipt.created_at).format('DD.MM.Y')}</div>
                  </div>
                ))}
              </>
            }
          />
        </div>
        <div className="col-3">
          <CloudPage
            title="Employees"
            rightButtonTitle="Add employee"
            rightButtonAction={() => {}}
            content={employees.map(employee => (
              <div key={employee.id} className="settings__employee text row">
                <div className="settings__employee_avatar" />
                <div className="settings__employee_info">
                  <div>{employee.name}</div>
                  <div className="note">{employee.position}</div>
                </div>
              </div>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
