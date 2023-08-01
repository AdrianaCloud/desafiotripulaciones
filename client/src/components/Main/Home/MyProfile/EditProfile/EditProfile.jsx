import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from '../../../../../context/userContext';

const EditProfile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const sportOptions = ['Aeróbicos', 'Aeróbicos acuáticos', 'Artes marciales', 'Atletismo',
    'BMX', 'Baloncesto', 'Balonmano', 'Billar', 'Bolos', 'Boxeo',
    'Bádminton', 'Béisbol', 'Calistenia', 'Calva', 'Caminar', 'Chito',
    'Ciclismo', 'Ciclismo estacionario', 'Correr', 'Dardos',
    'Entrenamiento en circuito', 'Escalada', 'Frisbee', 'Frontenis',
    'Fútbol', 'Fútbol sala', 'Gimnasia', 'Golf', 'Hockey', 'Kickball',
    'Kickboxing', 'Levantamiento de peso', 'Marcha rápida', 'Minigolf',
    'Montañismo', 'Máquina escaladora', 'Nado sincronizado',
    'Natación', 'Padel', 'Patinaje', 'Patinaje sobre hielo', 'Petanca',
    'Raquetbol', 'Salto a la comba', 'Senderismo', 'Skateboard',
    'Sóftbol', 'Tai chi', 'Tenis', 'Tenis de mesa', 'Tenis en pareja',
    'Ultimate frisbee', 'Voleibol', 'Voleibol acuático', 'Waterpolo',
    'Yoga'];

  useEffect(() => {
    const completeProfile = async () => {
      try {
        const response = await axios.update('https://backend-app-hbpdfkrhla-ew.a.run.app/api/perfil', editedUserPreferences, {

        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    completeProfile();
  }, [editedUserPreferences]);
  const [selectedSports, setSelectedSports] = useState([]);
  const [showSports, setShowSports] = useState(false);
  const [editedUserPreferences, setEditedUserPreferences] = useState({});
  const handleToggleSports = () => {
    setShowSports(!showSports);
  };
  const handleSportChange = (event) => {
    const selectedSport = event.target.value;
    if (selectedSports.includes(selectedSport)) {
      setSelectedSports(selectedSports.filter((sport) => sport !== selectedSport));
    } else if (selectedSports.length < 3) {
      setSelectedSports([...selectedSports, selectedSport]);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault()
    const editedUserPreferences = {
      "user_id": userData.email,
      "condicion": e.target.nivelActividad.value,
      "preferencias_deportivas": selectedSports,
      "tipo_de_dieta": e.target.tipoDieta.value,
      "objetivo_de_entrenamiento": e.target.objetivoEntrenamiento.value,
      "ciudad": e.target.ciudad.value,
      "altura": parseFloat(e.target.altura.value),
      "peso": e.target.peso.value,
      "edad": parseInt(e.target.edad.value, 10),
      "sexo": e.target.genero.value
    }
    setEditedUserPreferences(editedUserPreferences)
  }

  return <>
    <section className="edit-profile-container">
      <div className="black-box">
        <h3>Eustaquio Abichuela</h3>
        <img className="stats-img" src="./silluette.jpg" alt="" />
      </div>
      <h2>Modifica tu perfil</h2>
      <form action="" onSubmit={handleForm}>
        <p className="info-title">Nivel de actividad</p>
        <select name="nivelActividad" id="nivelActividad">
          <option value="">Nivel de actividad</option>
          <option value="0">Nada</option>
          <option value="1">3 veces por semana</option>
          <option value="2">5 veces por semana</option>
        </select>
        <p className="info-title">Preferencias deportivas </p>
        <button className="show-sports-btn" type="button" onClick={handleToggleSports}>
          {showSports ? "Ocultar" : "Mostrar"} deportes favoritos
        </button>
        <div>
          {showSports && (
            <div>
              {sportOptions.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    name="sports"
                    value={option}
                    onChange={handleSportChange}
                    checked={selectedSports.includes(option)}
                  />{" "}
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
        <p className="info-title">tipo de dieta </p>
        <select name="tipoDieta" id="tipoDieta">
          <option value="">Elige una opción</option>
          <option value="vegetariana">Vegetariana</option>
          <option value="vegana">Vegana</option>
          <option value="omnívora">Omnívora</option>
        </select>
        <p className="info-title">objetivo del entrenamiento </p>
        <select name="objetivoEntrenamiento" id="objetivoEntrenamiento">
          <option value="">Elige una opción</option>
          <option value="0">suave</option>
          <option value="1">medio</option>
          <option value="2">fuerte</option>
        </select>
        <p className="info-title">altura </p>
        <input type="text" className="input-edit-data" />
        <p className="info-title">Peso </p>
        <input type="text" className="input-edit-data" />
        <p className="info-title">Genero </p>
        <select name="genero" id="genero">
          <option value="">Género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Prefiero no revelarlo">Prefiero no revelarlo</option>
        </select>
        <p className="info-title">Edad </p>
        <input type="text" className="input-edit-data" />
        <button id="edit-profile-btn">Enviar</button>
      </form>
    </section>

  </>;
};

export default EditProfile;
