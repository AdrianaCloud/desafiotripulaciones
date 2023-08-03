import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { arrowUp, logoFacebook, logoInstagram, logoTwitter, peopleCircleOutline, star, starHalf } from 'ionicons/icons';
import Login from './Login/Login'
import Header from '../../Header/Header'
import { UserContext } from '../../../context/userContext';



const Home = () => {
  const { userData, setUserData } = useContext(UserContext)
  const logged = userData.logged
  return <>
    <div className="home-container">
      {logged === true ? <Header /> : null}
      {logged === false ? <Login /> : null}
      {logged === true ? <section className="welcome">
        <article className="max-security">
          <h2>Máxima seguridad</h2>
          <p>Enfrenta las olas de calor con seguridad y rendimiento. Regístrate ahora y únete a Sport Cool para disfrutar de una experiencia deportiva sin preocupaciones</p>
          <img src="./foto11.jpeg" alt="" />
          <img src="./logo/lOGO.png" alt="" className="logo-welcome" />
        </article>
      </section> : null}

      <section className="buttons">
        <button className="nav-link"><Link to='/consejosseguridad'>Consejos seguridad</Link></button>
        <button className="nav-link"><Link to='/eltiempo'>Pronosticos meteorologicos</Link></button>
        <button className="nav-link"><Link to='/mapa'>Mapa de ruta</Link></button>
        <button className="nav-link"><Link to='/alimentación'>alimentacion</Link></button>
        <button className="nav-link"><Link to='/foro'>Comunidad de apoyo</Link></button>
        <button className="nav-link"><Link to='/miperfil'>Mi perfil</Link></button>

      </section>

      <section className="articles">
        <section className="security-advice">
          <article>
            <h3>Consejos de seguridad</h3>
            <p>Descubre nuestros consejos prácticos y especializados para protegerte durante olas de calor y asegurar un entrenamiento seguro y placentero.</p>
            <img src="./foto4.jpeg" alt="" />
            <button className="nav-link"><Link to='/consejosseguridad'>acceder</Link></button>
          </article>
        </section>
        <section className="weather">
          <article>
            <h3>Pronóstico meteorologicas</h3>
            <p>Informate con detalle sobre las temperaturas máximas y mínimas, niveles de humedad y recibe alertas para planificar tus entrenamientos al aire libre.</p>
            <img src="./foto10.jpeg" alt="" />
            <button className="nav-link"><Link to='/consejosseguridad'>acceder</Link></button>
          </article>
        </section>
        <section className="routes">
          <article>
            <h3>Rutas recomendadas</h3>
            <p>Encuentra los mejores caminos y zonas de sombra para que disfrutes del deporte sin preocupaciones en entornos frescos y protegidos.</p>
            <img src="./foto6.jpeg" alt="" />
            <button className="nav-link"><Link to='/mapa'>acceder</Link></button>
          </article>
        </section>

        <section className="adaptation">
          <article>
            <h3>Aclimatación y Adaptación</h3>
            <p>Aprende a adaptarte al calor gradualmente y optimiza tu rendimiento deportivo durante las olas de calor, sacando el máximo provecho de tu entrenamiento</p>
            <img src="./foto3.jpeg" alt="" />
            <button className="nav-link"><Link to='/alimentacion'>acceder</Link></button>
          </article>
        </section>

        <section className="hidratacion">
          <article>
            <h3>Recordatorio de hidratación</h3>
            <p>Recibe notificaciones personalizadas para mantener tu cuerpo bien hidratado y asegurar tu mejor desempeño deportivo.</p>
            <img src="./foto8.jpeg" alt="" />
            <button className="nav-link"><Link to='/recordatoriohidratacion'>acceder</Link></button>
          </article>
        </section>

        <section className="comunity">
          <article>
            <h3>Comunidad y apoyo</h3>
            <p>Conecta con otros deportistas apasionados, comparte tus experiencias y recibe apoyo para mantenerte motivado y alcanzar tus objetivos deportivos.</p>
            <img src="./foto9.jpeg" alt="" />
            <button className="nav-link"><Link to='/foro'>acceder</Link></button>
          </article>
        </section>

        <section className="natural-resources">
          <article>
            <h3>Recursos adicionales</h3>
            <p>Accede a una selección de recursos que mejorarán tu práctica deportiva y te permitirán estar siempre preparado para tus entrenamientos</p>
            <img src="./foto2.jpeg" alt="" />
            <button className="nav-link"><Link to='/recursosnaturales'>acceder</Link></button>
          </article>
        </section>
      </section>

      <section className="footer">
        <section className="join-now">
          <h3>UNETE AHORA</h3>
          <div className="reviews">
            <article>
              <IonIcon icon={peopleCircleOutline} className="icon" />
              <div className="stars">
                <IonIcon icon={star} className="icon star" />
                <IonIcon icon={star} className="icon star" />
                <IonIcon icon={star} className="icon star" />
                <IonIcon icon={star} className="icon star" />
                <IonIcon icon={star} className="icon star" />
              </div>
              <p>¡SportCool es increíble! Esta app ha sido un salvavidas para mis actividades deportivas al aire libre. Con solo unos toques, obtengo pronósticos precisos para elegir el deporte perfecto en función del clima. ¡No puedo imaginar mi vida deportiva sin ella! 100% recomendada. 👌🌞🌧️ #SportCool #DeporteSegúnElClima</p>
            </article>
            <article>
              <IonIcon icon={peopleCircleOutline} className="icon" />
              <div className="stars">
                <IonIcon icon={star} className="icon star" />
                <IonIcon icon={star} className="icon star" />
                <IonIcon icon={star} className="icon star" />
                <IonIcon icon={star} className="icon star" />
                <IonIcon icon={starHalf} className="icon star" />
              </div>
              <p>¡SportCool es la app ideal para todos los aficionados a los deportes al aire libre! Su interfaz sencilla y pronósticos precisos hacen que planificar mis actividades deportivas sea pan comido. Nunca más me sorprenderé con un clima inesperado mientras hago ejercicio. ¡La recomiendo ampliamente para maximizar la diversión bajo el sol o la lluvia! 🌞🌧️ #SportCool #DeportesAdaptadosAlClima</p>
            </article>
          </div>
        </section>
      </section>
    </div>

  </>;
};

export default Home;
