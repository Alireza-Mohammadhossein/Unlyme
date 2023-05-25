import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ASSETS_URL } from '../../../../../types';
import icon1 from '../../../../../assets/images/my-services/services/1.png';
import icon2 from '../../../../../assets/images/my-services/services/2.png';
import icon3 from '../../../../../assets/images/my-services/services/3.png';
import icon4 from '../../../../../assets/images/my-services/services/4.png';
import icon5 from '../../../../../assets/images/my-services/services/5.png';
import icon6 from '../../../../../assets/images/my-services/services/6.png';
import icon7 from '../../../../../assets/images/my-services/services/7.png';
import icon8 from '../../../../../assets/images/my-services/services/8.png';
import icon9 from '../../../../../assets/images/my-services/services/9.png';
import icon10 from '../../../../../assets/images/my-services/services/10.png';
import icon11 from '../../../../../assets/images/my-services/services/11.png';
import icon12 from '../../../../../assets/images/my-services/services/12.png';




const Services = () => {
  const { t } = useTranslation();


  const options = [
    {id: 0 , icon: `${icon1}`, alt:'services-icon', link:'/'},
    {id: 1 , icon: `${icon2}`, alt:'services-icon', link:'/'},
    {id: 2 , icon: `${icon3}`, alt:'services-icon', link:'/'},
    {id: 3 , icon: `${icon4}`, alt:'services-icon', link:'/'},
    {id: 4 , icon: `${icon5}`, alt:'services-icon', link:'/'},
    {id: 5 , icon: `${icon6}`, alt:'services-icon', link:'/'},
    {id: 6 , icon: `${icon7}`, alt:'services-icon', link:'/'},
    {id: 7 , icon: `${icon8}`, alt:'services-icon', link:'/'},
    {id: 8 , icon: `${icon9}`, alt:'services-icon', link:'/'},
    {id: 9 , icon: `${icon10}`, alt:'services-icon', link:'/'},
    {id: 10 , icon: `${icon11}`, alt:'services-icon', link:'/'},
    {id: 11 , icon: `${icon12}`, alt:'services-icon', link:'/'}
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
