import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ASSETS_URL } from '../../../../types';




const Services = () => {
  const { t } = useTranslation();


  const options = [
    {id: 0 , icon: `${ASSETS_URL}/assets/images/services/services/1.png`, alt:'services-icon', link:'/'},
    {id: 1 , icon: `${ASSETS_URL}/assets/images/services/services/2.png`, alt:'services-icon', link:'/'},
    {id: 2 , icon: `${ASSETS_URL}/assets/images/services/services/3.png`, alt:'services-icon', link:'/'},
    {id: 3 , icon: `${ASSETS_URL}/assets/images/services/services/4.png`, alt:'services-icon', link:'/'},
    {id: 4 , icon: `${ASSETS_URL}/assets/images/services/services/5.png`, alt:'services-icon', link:'/'},
    {id: 5 , icon: `${ASSETS_URL}/assets/images/services/services/6.png`, alt:'services-icon', link:'/'},
    {id: 6 , icon: `${ASSETS_URL}/assets/images/services/services/7.png`, alt:'services-icon', link:'/'},
    {id: 7 , icon: `${ASSETS_URL}/assets/images/services/services/8.png`, alt:'services-icon', link:'/'},
    {id: 8 , icon: `${ASSETS_URL}/assets/images/services/services/9.png`, alt:'services-icon', link:'/'},
    {id: 9 , icon: `${ASSETS_URL}/assets/images/services/services/10.png`, alt:'services-icon', link:'/'},
    {id: 10 , icon: `${ASSETS_URL}/assets/images/services/services/11.png`, alt:'services-icon', link:'/'},
    {id: 11 , icon: `${ASSETS_URL}/assets/images/services/services/12.png`, alt:'services-icon', link:'/'}
  ]


  const itemTile = (
    <>
      {options.map(item => {
        return (
          <div key={item.id} className='my-services__services_item'>
            <a className='my-services__services_item-icon' href={item.link}>
              <img src={item.icon} alt={item.alt} />
            </a>
          </div>
        )
      })}
    </>
  )

  return (
    <div className='my-services__services'>
      <div className="my-services__services_container">
        <p className='my-services__services_title'>{t('SERVICES.SERVICES.TITLE')}</p>
        <div className='my-services__services_list'>
          {itemTile}
        </div>
      </div>
    </div>
  );
};

export default Services;
