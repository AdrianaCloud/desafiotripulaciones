import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';

const UserForm = () => {
  const { userData, setUserData } = useContext(UserContext)
  const navigate = useNavigate();
  const sportOptions = ['Aeróbicos acuáticos', 'Aeróbicos_1.0', 'Aeróbicos_2.0', 'Aeróbicos_3.0', 'Artes marciales', 'Atletismo_1.0', 'Atletismo_2.0', 'Atletismo_3.0', 'BMX', 'Baloncesto', 'Balonmano', 'Billar', 'Bolos', 'Boxeo', 'Bádminton', 'Béisbol', 'Calistenia_1.0', 'Calistenia_2.0', 'Calva', 'Caminar_1.0', 'Caminar_2.0', 'Caminar_3.0', 'Chito', 'Ciclismo estacionario_1.0', 'Ciclismo estacionario_2.0', 'Ciclismo estacionario_3.0', 'Ciclismo estacionario_4.0', 'Ciclismo estacionario_5.0', 'Ciclismo_1.0', 'Ciclismo_2.0', 'Ciclismo_3.0', 'Ciclismo_4.0', 'Ciclismo_5.0',
    'Correr',
    'Dardos',
    'Entrenamiento en circuito',
    'Escalada',
    'Frisbee',
    'Frontenis',
    'Fútbol',
    'Fútbol sala',
    'Gimnasia',
    'Golf',
    'Hockey',
    'Kickball',
    'Kickboxing',
    'Levantamiento de peso_1.0',
    'Levantamiento de peso_2.0',
    'Marcha rápida',
    'Minigolf',
    'Montañismo',
    'Máquina escaladora',
    'Nado sincronizado',
    'Natación_1.0',
    'Natación_2.0',
    'Natación_3.0',
    'Padel',
    'Patinaje',
    'Patinaje sobre hielo',
    'Petanca',
    'Raquetbol',
    'Salto a la comba_1.0',
    'Salto a la comba_2.0',
    'Salto a la comba_3.0',
    'Senderismo',
    'Skateboard',
    'Sóftbol',
    'Tai chi',
    'Tenis',
    'Tenis de mesa',
    'Tenis en pareja',
    'Ultimate frisbee',
    'Voleibol',
    'Voleibol acuático',
    'Waterpolo',
    'Yoga'];

  const [selectedSports, setSelectedSports] = useState([]);
  const [showSports, setShowSports] = useState(false);
  const [userPreferences, setUserPreferences] = useState({});


  const handleToggleSports = () => {
    setShowSports(!showSports);
  };

  const handleSportChange = (event) => {
    const selectedSport = event.target.value;
    if (selectedSports.includes(selectedSport)) {
      setSelectedSports(selectedSports.filter((sport) => sport !== selectedSport));
    } else if (selectedSports.length < 3) {
      setSelectedSports([...selectedSports, selectedSport]);
    };
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const userPreferences = {
      "user_id": userData.email,
      "preferencias_deportivas": selectedSports,
      "tipo_de_dieta": e.target.tipoDieta.value,
      "objetivo_entrenamiento": parseInt(e.target.objetivoEntrenamiento.value),
      "ciudad": e.target.ciudad.value,
      "edad": parseInt(e.target.edad.value, 10),
      "sexo": parseInt(e.target.genero.value),
      "peso": parseInt(e.target.peso.value),
      "condicion": parseInt(e.target.nivelActividad.value),
      "altura": parseFloat(e.target.altura.value)
    }
    const request = await axios.post("https://backend-app-hbpdfkrhla-ew.a.run.app/api/perfil", userPreferences);
    setUserPreferences(userPreferences);
    console.log(userPreferences);

    console.log(request)


  };

  return (
    <>
      <section className="user-form">
        <img src="./logo/lOGO(1).png" alt="" />
        <h3>¡vamos a conocerte mejor!</h3>
        <form action="" onSubmit={handleForm}>
          <button className="show-sports-btn" type="button" onClick={handleToggleSports}>
            {showSports ? "Ocultar" : "Mostrar"} deportes favoritos
          </button>
          <p>Algunos deportes estan divididos en intensidades, escoge tu intensidad preferida</p>
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

          <section className="first-select-group">

            <select name="nivelActividad" id="nivelActividad">
              <option value="">Nivel de actividad</option>
              <option value="0">Nada</option>
              <option value="1">3 veces por semana</option>
              <option value="2">5 veces por semana</option>
            </select>

            <select name="tipoDieta" id="tipoDieta">
              <option value="">Tipo de dieta</option>
              <option value="Vegetariana">Vegetariana</option>
              <option value="Vegana">Vegana</option>
              <option value="Omnívora">Omnívora</option>
            </select>
          </section>

          <section className="second-select-group">

            <select name="objetivoEntrenamiento" id="objetivoEntrenamiento">
              <option value="">Objetivo del entrenamiento</option>
              <option value="0">suave</option>
              <option value="1">medio</option>
              <option value="2">fuerte</option>
            </select>

            <select name="sexo" id="genero">
              <option value="">Género</option>
              <option value="0">Masculino</option>
              <option value="1">Femenino</option>
              <option value="Prefiero no revelarlo">Prefiero no revelarlo</option>
            </select>
          </section>

          <input name="ciudad" type="text" placeholder="Ciudad" />
          <input name="altura" type="text" placeholder="Altura" />
          <input name="peso" type="text" placeholder="Peso" />
          <input name="edad" type="text" placeholder="Edad" />

          <button type="submit" className="profile-btn">Enviar</button>
        </form>

      </section>
    </>
  );
};

export default UserForm;
