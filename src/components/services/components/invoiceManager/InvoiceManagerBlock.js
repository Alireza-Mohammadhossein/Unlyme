import React from 'react';
import moment from 'moment';
import CloudBlock from '../../../common/cloud-block/CloudBlock';

const InvoiceManagerBlock = () => {
  const dateFormat = 'DD.MM.Y';

  const content = (
    <div className="services__invoice-manager_container">
      <div className="services__invoice-manager_item">
        <div className="services__invoice-manager_item-col-1">
          <div>Apple.com</div>
          <div className="services__invoice-manager_item-text-gray">QU01</div>
        </div>
        <div className="services__invoice-manager_item-col-2">
          <div>5985 CHF</div>
          <div className="services__invoice-manager_item-text-gray">
            to{' '}
            {moment()
              .subtract(2, 'days')
              .format(dateFormat)}
          </div>
        </div>
        <div className="services__invoice-manager_item-status services__invoice-manager_item-status--draft">Draft</div>
      </div>
      <div className="services__invoice-manager_item">
        <div className="services__invoice-manager_item-col-1">
          <div>Spotify AB</div>
          <div className="services__invoice-manager_item-text-gray">QU02</div>
        </div>
        <div className="services__invoice-manager_item-col-2">
          <div>361 CHF</div>
          <div className="services__invoice-manager_item-text-gray">
            to{' '}
            {moment()
              .subtract(5, 'days')
              .format(dateFormat)}
          </div>
        </div>
        <div className="services__invoice-manager_item-status services__invoice-manager_item-status--sent">Sent</div>
      </div>
      <div className="services__invoice-manager_item">
        <div className="services__invoice-manager_item-col-1">
          <div>Microsoft Corp.</div>
          <div className="services__invoice-manager_item-text-gray">QU03</div>
        </div>
        <div className="services__invoice-manager_item-col-2">
          <div>195 CHF</div>
          <div className="services__invoice-manager_item-text-gray">
            to{' '}
            {moment()
              .subtract(7, 'days')
              .format(dateFormat)}
          </div>
        </div>
        <div className="services__invoice-manager_item-status services__invoice-manager_item-status--viewed">Viewed</div>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title='Invoice manager'
      // rightButtonAction={() => alert('s')}
      // rightButtonAction={(e) => e.preventDefault()}
      content={content}
      infoContent="s"
      iconName="invoice-manager"
      iconContainerColor="orange"
      mdiIcon="library_books"
    />
  );
};

export default InvoiceManagerBlock;
