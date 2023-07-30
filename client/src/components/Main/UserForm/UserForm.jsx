import React, { useState, useEffect } from "react";
import axios from "axios";

const UserForm = () => {
  const sportOptions = [
    "BMX", "Ciclismo", "Ciclismo estacionario", "Calistenia",
    "Entrenamiento en circuito", "Levantamiento de peso",
    "Máquina escaladora", "Aeróbicos", "Yoga", "Aeróbicos acuáticos",
    "Correr", "Atletismo", "Bádminton", "Baloncesto", "Bolos",
    "Billar", "Boxeo", "Dardos", "Frisbee", "Ultimate frisbee", "Golf",
    "Minigolf", "Gimnasia", "Balonmano", "Hockey", "Petanca", "Calva",
    "Artes marciales", "Kickboxing", "Kickball", "Pádel", "Raquetbol",
    "Escalada", "Salto a la comba", "Chito", "Skateboard", "Patinaje",
    "Fútbol", "Fútbol sala", "Sóftbol", "Béisbol",
    "Tenis de mesa / ping pong", "Tai chi", "Tenis", "Tenis en pareja",
    "Voleibol", "Marcha rápida", "Montañismo", "Caminar", "Natación",
    "Nado sincronizado", "Waterpolo", "Voleibol acuático",
    "Patinaje sobre hielo", "Frontenis", "Senderismo"
  ];

  const [selectedSports, setSelectedSports] = useState([]);
  const [showSports, setShowSports] = useState(false);
  const [userData, setuserData] = useState({});

  useEffect(() => {
    const completeProfile = async () => {
      const token = "4654s6ds5d54sd45sd54"
      try {
        const response = await axios.post('https://backend-app-hbpdfkrhla-ew.a.run.app/api/complete-profile', userData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    completeProfile();
  }, [userData])

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

  const handleForm = (e) => {
    e.preventDefault();
    // este formulario manda los datos a la tabla de profile. Cual es la ruta?
    //este boton redirecciona al componente myprofile
    //guardo la informacion de cada valor de los inputs en useState?
    const userData = {
      "nivel_de_actividad": e.target.nivelActividad.value,
      "preferencias_deportivas": selectedSports,
      "tipo_de_dieta": e.target.tipoDieta.value,
      "objetivo_de_entrenamiento": e.target.objetivoEntrenamiento.value,
      "ciudad": e.target.ciudad.value,
      "altura": parseFloat(e.target.altura.value),
      "peso": e.target.peso.value,
      "edad": parseInt(e.target.edad.value, 10),
      "genero": e.target.genero.value,
    }
    setuserData(userData)
  };

  return (
    <>
      <section className="user-form">
        <h2>Introduce tus datos</h2>

        <form action="" onSubmit={handleForm}>
          <div>
            <p>
              <button type="button" onClick={handleToggleSports}>
                {showSports ? "Ocultar" : "Mostrar"} deportes favoritos
              </button>
            </p>
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
              <option value="vegetariana">Vegetariana</option>
              <option value="vegana">Vegana</option>
              <option value="omnívora">Omnívora</option>
            </select>
          </section>

          <section className="second-select-group">

            <select name="objetivoEntrenamiento" id="objetivoEntrenamiento">
              <option value="">Objetivo del entrenamiento</option>
              <option value="0">suave</option>
              <option value="1">medio</option>
              <option value="2">fuerte</option>
            </select>

            <select name="genero" id="genero">
              <option value="">Género</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
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
