import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../../../context/userContext";
import NavBar from "../../Header/NavBar/NavBar";
import { IonIcon } from '@ionic/react';
import { listOutline } from 'ionicons/icons';
import axios from "axios";

const MyProfile = ({ onQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const [displayInfo, setDisplayInfo] = useState([]);




  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };


  useEffect(() => {
    const getUserData = async () => {
      const response = await axios.get(`http://localhost:5000/api/perfil/${userData.email}`)
      setDisplayInfo(response.data[0])
    }

    getUserData()

  }, [])
  onQuery(displayInfo)
  console.log(displayInfo)

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
        <p><span>Fecha de nacimiento:</span>20 de abril del 90 { }</p>
        <p><span>Ciudad:</span> {displayInfo?.ciudad ? displayInfo.ciudad : ''}</p>
        <p><span>5</span> Seguidos:<span>12</span> Seguidores</p>
      </section>
      <img src="./Group39.png" alt="" />
      <section className="info">
        <p className="info-title">Nivel de actividad</p>
        <p className="info-container">
          {displayInfo?.condicion === 0 ? "1 a 2 veces por semana" :
            displayInfo?.condicion === 1 ? "3 a 4 veces por semana" :
              displayInfo?.condicion === 2 ? "5 a 7 veces por semana" :
                null}
        </p>
        <p className="info-title">Preferencias deportivas </p>
        <p className="info-container"> {displayInfo?.preferencias_deportivas && displayInfo?.preferencias_deportivas.length > 0 ?
          displayInfo.preferencias_deportivas.join(", ") :
          ''}</p>
        <p className="info-title">tipo de dieta </p>
        <p className="info-container"> {displayInfo?.tipo_de_dieta ? displayInfo.tipo_de_dieta : null}</p>
        <p className="info-title">objetivo del entrenamiento </p>
        <p className="info-container">
          {displayInfo?.objetivo_entrenamiento === 0 ? "Ganar peso" :
            displayInfo?.objetivo_entrenamiento === 1 ? "Mantener peso" :
              displayInfo?.objetivo_entrenamiento === 2 ? "Perder peso" :
                null}
        </p>
        <p className="info-title">altura </p>
        <p className="info-container">{displayInfo?.altura ? displayInfo.altura : null}</p>
        <p className="info-title">Peso </p>
        <p className="info-container">{displayInfo?.peso ? displayInfo.peso : null}</p>
        <p className="info-title">Genero </p>
        <p className="info-container">
          {displayInfo?.sexo === 0 ? "Masculino" :
            displayInfo?.sexo === 1 ? "Femenino" :
              null}</p>
        <p className="info-title">Edad </p>
        <p className="info-container">{displayInfo?.edad ? displayInfo.edad : null}</p>
      </section>
    </section>
    {/* Render NavBar only if isMenuOpen is true */}
  </>
};

export default MyProfile;
