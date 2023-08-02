import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from '../../../../../context/userContext';

const EditProfile = ({ query }) => {
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
  const [selectedSports, setSelectedSports] = useState([]);
  const [showSports, setShowSports] = useState(false);
  const [editedUserPreferences, setEditedUserPreferences] = useState({});
  console.log(query)

  useEffect(() => {
    // Whenever the 'query' state is updated, check if it has data and set the form data accordingly
    if (query && Object.keys(query).length > 0) {
      setSelectedSports(query.preferencias_deportivas);
      setEditedUserPreferences({
        user_id: userData.email,
        preferencias_deportivas: query.preferencias_deportivas,
        tipo_de_dieta: query.tipo_de_dieta,
        objetivo_entrenamiento: query.objetivo_entrenamiento,
        ciudad: query.ciudad,
        edad: query.edad,
        sexo: query.sexo,
        peso: query.peso,
        condicion: query.condicion,
        altura: query.altura,
      });
    }
  }, [query, userData.email]);

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
    console.log(editedUserPreferences)
    if (query && Object.keys(query).length > 0) {
      try {
        const response = await axios.put('https://backend-app-hbpdfkrhla-ew.a.run.app/api/perfil', editedUserPreferences, {
        });
        console.log(query)
        console.log(response);
        console.log(editedUserPreferences)
      } catch (error) {
        console.log(error);
      }
      setEditedUserPreferences(editedUserPreferences)
    } else {
      try {
        const response = await axios.post('https://backend-app-hbpdfkrhla-ew.a.run.app/api/perfil', editedUserPreferences, {

        });

        console.log(response);
        console.log(editedUserPreferences)
      } catch (error) {
        console.log(error);
      }
      setEditedUserPreferences(editedUserPreferences)
    }
  }
  console.log(editedUserPreferences)


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
          <option value="Vegetariana">Vegetariana</option>
          <option value="Vegana">Vegana</option>
          <option value="Omnívora">Omnívora</option>
        </select>

        <p className="info-title">objetivo del entrenamiento </p>
        <select name="objetivoEntrenamiento" id="objetivoEntrenamiento">
          <option value="">Elige una opción</option>
          <option value="0">suave</option>
          <option value="1">medio</option>
          <option value="2">fuerte</option>
        </select>

        <p className="info-title">altura </p>
        <input type="text" name="altura" className="input-edit-data" />

        <p className="info-title">Peso </p>
        <input type="text" name="peso" className="input-edit-data" />

        <p className="info-title">Genero </p>
        <select name="sexo" id="genero">

          <option value="">Género</option>
          <option value="0">Masculino</option>
          <option value="1">Femenino</option>
          <option value="Prefiero no revelarlo">Prefiero no revelarlo</option>
        </select>
        <p className="info-title">Edad </p>
        <input type="text" name="edad" className="input-edit-data" />

        <p className="info-title">Ciudad </p>
        <input type="text" name="ciudad" className="input-edit-data" />

        <button id="edit-profile-btn">Enviar</button>
      </form>
    </section>

  </>;
};

export default EditProfile;
