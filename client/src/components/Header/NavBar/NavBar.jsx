import React from "react";
import { Link } from 'react-router-dom';

const NavBar = ({ onCloseMenu }) => {
  return (
    <>
      <ul>
        <li><Link to='/miperfil' onClick={onCloseMenu}>Mi Perfil</Link></li>
        <li><Link to='/consejosseguridad' onClick={onCloseMenu}>Consejos seguridad</Link></li>
        <li><Link to='/pronostico' onClick={onCloseMenu}>Pronosticos meteorologicos</Link></li>
        <li><Link to='/mapa' onClick={onCloseMenu}>Mapa de ruta</Link></li>
        <li><Link to='/alimentación' onClick={onCloseMenu}>alimentacion</Link></li>
        <li><Link to='/foro' onClick={onCloseMenu}>Comunidad de apoyo</Link></li>
        <li><Link to='/recursosnaturales' onClick={onCloseMenu}>Recursos naturales</Link></li>
      </ul>
    </>
  );
};

export default NavBar;
