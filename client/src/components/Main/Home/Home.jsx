import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { arrowUp, logoFacebook, logoInstagram, logoTwitter, peopleCircleOutline, star, starHalf } from 'ionicons/icons';
import Login from './Login/Login'
import { UserContext } from '../../../context/userContext';


const Home = () => {
  const { userData, setUserData } = useContext(UserContext)
  const logged = userData.logged
  console.log(logged)
  console.log(userData)
  return <>
    <div className="home-container">
      {logged === false ? <Login /> : null}
      {logged === true ? <section className="welcome">
        <article className="max-security">
          <h2>Máxima seguridad</h2>
          <p>Enfrenta las olas de calor con seguridad y rendimiento. Regístrate ahora y únete a Sport Cool para disfrutar de una experiencia deportiva sin preocupaciones</p>
          <img src="./logo/lOGO.png" alt="" className="logo-welcome" />
        </article>
      </section> : null}

      <section className="buttons">
        <button className="nav-link"><Link to='/consejosseguridad'>Consejos seguridad</Link></button>
        <button className="nav-link"><Link to='/pronostico'>Pronosticos meteorologicos</Link></button>
        <button className="nav-link"><Link to='/mapa'>Mapa de ruta</Link></button>
        <button className="nav-link"><Link to='/alimentación'>alimentacion</Link></button>
        <button className="nav-link"><Link to='/recordatoriohidratacion'>Recordatorio de hidratación</Link></button>
        <button className="nav-link"><Link to='/foro'>Comunidad de apoyo</Link></button>
        <button className="nav-link"><Link to='/recursosnaturales'>Recursos naturales</Link></button>
      </section>

      <section className="articles">
        <section className="security-advice">
          <article>
            <h3>Consejos de seguridad</h3>
            <p>Descubre nuestros consejos prácticos y especializados para protegerte durante olas de calor y asegurar un entrenamiento seguro y placentero.</p>
            <button className="nav-link"><Link to='/consejosseguridad'>acceder</Link></button>
          </article>
          <article>
            <h3>Pronóstico y alertas meteorologicas</h3>
            <p>Informate con detalle sobre las temperaturas máximas y mínimas, niveles de humedad y recibe alertas para planificar tus entrenamientos al aire libre.</p>
            <button className="nav-link"><Link to='/consejosseguridad'>acceder</Link></button>
          </article>
        </section>

        <section className="routes">
          <article>
            <h3>Mapa de rutas recomendadas</h3>
            <p>Encuentra los mejores caminos y zonas de sombra para que disfrutes del deporte sin preocupaciones en entornos frescos y protegidos.</p>
            <button className="nav-link"><Link to='/map'>acceder</Link></button>
          </article>
        </section>

        <section className="adaptation">
          <article>
            <h3>adaptación y aclimatación</h3>
            <p>Aprende a adaptarte al calor gradualmente y optimiza tu rendimiento deportivo durante las olas de calor, sacando el máximo provecho de tu entrenamiento</p>
            <button className="nav-link"><Link to='/alimentacion'>acceder</Link></button>
          </article>
          <article>
            <h3>recordatorio de hidratación</h3>
            <p>Recibe notificaciones personalizadas para mantener tu cuerpo bien hidratado y asegurar tu mejor desempeño deportivo.</p>
            <button className="nav-link"><Link to='/recordatoriohidratacion'>acceder</Link></button>
          </article>
        </section>

        <section className="comunity">
          <article>
            <h3>Comunidad y apoyo</h3>
            <p>Conecta con otros deportistas apasionados, comparte tus experiencias y recibe apoyo para mantenerte motivado y alcanzar tus objetivos deportivos.</p>
            <button className="nav-link"><Link to='/foro'>acceder</Link></button>
          </article>
        </section>

        <section className="natural-resources">
          <article>
            <h3>Recursos naturales</h3>
            <p>Accede a una selección de recursos que mejorarán tu práctica deportiva y te permitirán estar siempre preparado para tus entrenamientos</p>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, consequuntur explicabo minus porro incidunt praesentium, veritatis, expedita deserunt aperiam error sequi repellat. Obcaecati sint maxime, id vitae eos quaerat quas dicta, architecto quos a impedit culpa. Tenetur minus suscipit culpa possimus, voluptatem sunt ad quibusdam dolor quo impedit tempore asperiores? Dicta sint placeat, eum ea saepe ad necessitatibus exercitationem quis.</p>
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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quasi quisquam sit soluta beatae. Dolorem maxime atque soluta temporibus. Temporibus nemo molestias porro maxime, laborum officiis praesentium! Ratione ullam deleniti, dolorem nesciunt voluptate numquam ipsam cumque, recusandae accusantium dicta natus.</p>
            </article>
          </div>
        </section>
      </section>
    </div>

  </>;
};

export default Home;
