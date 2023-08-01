import React from "react";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../../../context/userContext";
import NavBar from "../../Header/NavBar/NavBar";
import { IonIcon } from '@ionic/react';
import { listOutline } from 'ionicons/icons';

const MyProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userData, setUserData } = useContext(UserContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };
  return <>

    <section className="profile-container">

      <div className="black-box">
        <IonIcon icon={listOutline} className="icon list-icon" onClick={toggleMenu} />
        <h3>{userData.user_name}</h3>
        <img className="stats-img" src="./silluette.jpg" alt="" />
      </div>
      {isMenuOpen && <NavBar onCloseMenu={handleMenuItemClick} />}
      <Link to='/editarperfil'>
        <button className="edit-profile-btn">editar perfil</button>
      </Link>

      <section className="heading-info">
        <p><span>Fecha de nacimiento: </span>20 de abril del 90 { }</p>
        <p><span>Ciudad:</span> { }</p>
        <p><span>5</span> Seguidos    <span>12</span> Seguidores</p>
      </section>
      <img src="./Group39.png" alt="" />
      <section className="info">
        <p className="info-title">Nivel de actividad</p>
        <p className="info-container">1 o 2 veces por semana{ }</p>
        <p className="info-title">Preferencias deportivas </p>
        <p className="info-container"> tennis, badminton, petanca{ }</p>
        <p className="info-title">tipo de dieta </p>
        <p className="info-container"> vegetariana{ }</p>
        <p className="info-title">objetivo del entrenamiento </p>
        <p className="info-container"> Perdida de grasa{ }</p>
        <p className="info-title">altura </p>
        <p className="info-container">1,24{ }</p>
        <p className="info-title">Peso </p>
        <p className="info-container">42{ }</p>
        <p className="info-title">Genero </p>
        <p className="info-container">Masculino{ }</p>
        <p className="info-title">Edad </p>
        <p className="info-container">32{ }</p>
      </section>
    </section>
    {/* Render NavBar only if isMenuOpen is true */}
  </>
};

export default MyProfile;
