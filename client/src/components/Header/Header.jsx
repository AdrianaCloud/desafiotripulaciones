import React, { useContext, useState } from "react";
import NavBar from "./NavBar/NavBar";
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { listOutline } from 'ionicons/icons';
import { UserContext } from '../../context/userContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userData, setUserData } = useContext(UserContext)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <>
      <header>

        <Link to='/'><h1>SPORTS COOL</h1></Link>
        <div className="button-container">
          {/* <button className="nav-link"><Link className="new-user" to='/register'>NUEVO USUARIO</Link></button> */}
          {/* <button><Link className="new-user" to='/miperfil'>Inicio</Link></button> */}
          <IonIcon icon={listOutline} className="icon list-icon" onClick={toggleMenu} />
        </div>
      </header>

      {isMenuOpen && <NavBar onCloseMenu={handleMenuItemClick} />} {/* Render NavBar only if isMenuOpen is true */}
    </>
  );
};

export default Header;
