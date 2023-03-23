import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { SITE_NAME } from '../../types';
import './menu.scss';




const Menu = () => {
    const SITE_NAME = "WayWe";
//   const { t } = useTranslation();
  const [showed, setShowed] = useState(false);

  const data = [
    { id: 1, icon: 'dashboard', title: 'My services', link: '/' },
    { id: 2, icon: 'domain', title: 'Domains', link: '/services/domains' },
    { id: 3, icon: 'web', title: 'Site builder', link: '/services/site-builder' },
    { id: 4, icon: 'content_copy', title: 'Copy sites', link: '/services/copy-sites' },
    { id: 5, icon: 'monetization_on', title: 'Bank', link: '/services/bank' },
    { id: 6, icon: 'settings', title: 'Setting', link: '/settings' },
    { id: 8, icon: 'calendar_month', title: 'Calendar', link: '/services/calendar' },
    { id: 7, icon: 'mail_outline', title: 'Online consultant', link: '/services/online-consultant' },
  ];

  return (
    <div className={`menu ${showed ? 'menu--showed' : ''}`}>
      <div className="menu__row">
        <div className="menu__row_col-1">
          <div className="menu__burger" onClick={() => setShowed(!showed)}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="menu__row_col-2">
          <a href="/" className="menu__site-name">
            {SITE_NAME}
          </a>
        </div>
      </div>
      <div className="menu__line" />
      {data.map(item => (
        <a key={item.id} href={item.a} className="menu__row menu__row--link">
          <div className="menu__row_col-1">
            <i className='menu__row_icon material-icons'>
                {item.icon}
            </i>
            {/* <b className={`menu__row_icon mdi mdi-${item.icon}`} /> */}
          </div>
          <div className="menu__row_col-2">
            <span>{item.title}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Menu;
