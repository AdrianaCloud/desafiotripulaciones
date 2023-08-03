import React from "react";
import { IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';

const HeaderTwo = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1)
  }
  return <>
    <header className="header-box">
      <IonIcon icon={arrowBackOutline} className="icon arrow-icon" onClick={handleGoBack} />
      <img className="logo-header" src="./logo/lOGO(1).png" alt="" />
    </header>
  </>;
};

export default HeaderTwo;
