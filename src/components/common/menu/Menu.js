import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ASSETS_URL, LOCAL_STORAGE_LOCALE, SITE_NAME, SUPPORTED_LANGUAGES } from '../../../types';
import logo_white from '../../../assets/images/logo_white.png';


const Menu = () => {
  const { t, i18n } = useTranslation()

  const [showed, setShowed] = useState(false);

  const data = [
    { id: 1, icon: 'dashboard', title: 'MY_SERVICES', link: '/' },
    { id: 2, icon: 'domain', title: 'DOMAINS', link: '/services/domains' },
    { id: 3, icon: 'web', title: 'SITE_BUILDER', link: '/services/site-builder' },
    { id: 4, icon: 'content_copy', title: 'COPY_SITES', link: '/services/copy-sites' },
    { id: 5, icon: 'monetization_on', title: 'BANK', link: '/services/bank' },
    { id: 6, icon: 'settings', title: 'SETTINGS', link: '/settings' },
    { id: 8, icon: 'calendar_month', title: 'CALENDAR', link: '/services/calendar' },
    { id: 7, icon: 'mail_outline', title: 'ONLINE_CONSULTANT', link: '/services/online-consultant' },
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
            <img src={logo_white} className="menu__site-logo" />
            {/* {SITE_NAME} */}
          </a>
        </div>
      </div>
      <div className="menu__line" />
      {data.map(item => (
        <Link key={item.id} to={item.link} className="menu__row menu__row--link">
          <div className="menu__row_col-1">
            <i className='menu__row_icon material-icons'>
                {item.icon}
            </i>
          </div>
          <div className="menu__row_col-2">
            <span>{t(`MENU.${item.title}`)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
