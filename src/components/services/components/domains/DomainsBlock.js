import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import Domain from '../../../domains/Domain';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import icon from '../../../../assets/images/my-services/domain-widget.png'

const DomainsBlock = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();


  const registeredDomainsCounter = 2;
  const expiredDomainsCounter = 0;
  const expiringDomainsCounter = 1;
  const pendingDomainsCounter = 1;

  const expiringDomainsDayCounter = 7;

  const content = (
    <div className="my-services__domains_container">
      <div className='my-services__domains_header'>
        {t('SERVICES.DOMAINS.HEADER1')} {registeredDomainsCounter} {t('SERVICES.DOMAINS.HEADER2')}
      </div>

      <div className='my-servces__domains_items'>
        <List
          sx={{ 
            '& .MuiListItem-root': { marginTop: '25px', padding: 0, alignItems: 'center' },
            '& .MuiListItemIcon-root': { minWidth: 'unset', marginRight: '10px' },
            '& .MuiListItemText-root':  { margin: 0 },
            '& .MuiSvgIcon-root': {fontSize: '15px' , color: '#74BA6A'}
          }}
        >
          <ListItem>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary= {`${expiredDomainsCounter} ${t('SERVICES.DOMAINS.EXPIRED')}`}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary= {`${expiringDomainsCounter} ${t('SERVICES.DOMAINS.EXPIRING')}`}
              secondary={expiringDomainsCounter ? `${t('SERVICES.DOMAINS.SUBEXPIRING1')} ${expiringDomainsDayCounter} ${t('SERVICES.DOMAINS.SUBEXPIRING2')}` : null}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary= {`${pendingDomainsCounter} ${t('SERVICES.DOMAINS.PENDING')}`}
            />
          </ListItem>
        </List>
      </div>

    </div>
  );

  return (
    <CloudBlock
      title={t('SERVICES.DOMAINS.TITLE')}
      subtitle={t('SERVICES.DOMAINS.SUBTITLE')}
      rightButtonAction={() => navigate('/services/domains')}
      infoContent="sd"
      directComponent={<Domain />}
      content={content}
      icon={icon}
    />
  );
};

export default DomainsBlock;
