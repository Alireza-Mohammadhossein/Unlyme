import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


// const label = { InputProps: { 'aria-label': 'Checkbox demo' } };

const GuideBlock = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className='my-services__guide' data-test='guide'>
        <div className='my-services__guide-container'>
            <div className='my-services__guide_header'>
                <h2 className='my-services__guide_header-title'>
                    {t('SERVICES.GUIDE.TITLE')}
                </h2>
            </div>

            <div className='my-services__guide_list'>
              <FormGroup>
                <FormControlLabel 
                  control={
                    <Checkbox 
                      defaultChecked 
                      label={t('SERVICES.GUIDE.FIRST')} 
                      icon={<RadioButtonUncheckedIcon />} 
                      checkedIcon={<CheckCircleIcon />}
                      sx={{
                          color: "#FFF",
                          '&.Mui-checked': {color: "#51A3FF"},
                          '& .MuiSvgIcon-root': { fontSize: 25 }, 
                      }}
                    />}
                  label={t('SERVICES.GUIDE.FIRST')} 
                />

                <FormControlLabel 
                  control={
                    <Checkbox 
                      defaultChecked 
                      label={t('SERVICES.GUIDE.SECOND')}
                      icon={<RadioButtonUncheckedIcon />} 
                      checkedIcon={<CheckCircleIcon />}
                      sx={{
                          color: "#FFF",
                          '&.Mui-checked': {color: "#51A3FF"},
                          '& .MuiSvgIcon-root': { fontSize: 25 }, 
                      }}
                    />}
                  label={t('SERVICES.GUIDE.SECOND')}
                />

                <FormControlLabel 
                  control={
                    <Checkbox 
                      defaultChecked 
                      label={t('SERVICES.GUIDE.THIRD')}
                      icon={<RadioButtonUncheckedIcon />} 
                      checkedIcon={<CheckCircleIcon />}
                      sx={{
                          color: "#FFF",
                          '&.Mui-checked': {color: "#51A3FF"},
                          '& .MuiSvgIcon-root': { fontSize: 25 }, 
                      }}
                    />}
                  label={t('SERVICES.GUIDE.THIRD')}
                />

                <FormControlLabel 
                  control={
                    <Checkbox
                      label={t('SERVICES.GUIDE.FORTH')}
                      icon={<RadioButtonUncheckedIcon />} 
                      checkedIcon={<CheckCircleIcon />}
                      sx={{
                          color: "#FFF",
                          '&.Mui-checked': {color: "#51A3FF"},
                          '& .MuiSvgIcon-root': { fontSize: 25 }, 
                      }}
                    />}
                  label={t('SERVICES.GUIDE.FORTH')}
                />

                <FormControlLabel 
                  control={
                    <Checkbox 
                      label={t('SERVICES.GUIDE.FIFTH')}
                      icon={<RadioButtonUncheckedIcon />} 
                      checkedIcon={<CheckCircleIcon />}
                      sx={{
                          color: "#FFF",
                          '&.Mui-checked': {color: "#51A3FF"},
                          '& .MuiSvgIcon-root': { fontSize: 25 }, 
                      }}
                    />}
                  label={t('SERVICES.GUIDE.FIFTH')}
                />

                <FormControlLabel 
                  control={
                    <Checkbox 
                      label={t('SERVICES.GUIDE.SIXTH')}
                      icon={<RadioButtonUncheckedIcon />} 
                      checkedIcon={<CheckCircleIcon />}
                      sx={{
                          color: "#FFF",
                          '&.Mui-checked': {color: "#51A3FF"},
                          '& .MuiSvgIcon-root': { fontSize: 25 }, 
                      }}
                    />}
                  label={t('SERVICES.GUIDE.SIXTH')}
                />
              </FormGroup>
            </div>
        </div>
    </div>
  );
};

export default GuideBlock;
