import React from "react";
import { Link } from 'react-router-dom';


const Home = () => {
  return <>
    <section className="welcome">
      <article>
        <h1>BIENVENIDO</h1>
        <p>texto</p>
      </article>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3ASport_balls.svg&psig=AOvVaw27iWQExnsQQ9JxTpdIUA8L&ust=1690566434277000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDr_O-4r4ADFQAAAAAdAAAAABAE" alt="" />
    </section>
    <sections className="buttons">
      <button className="nav-link"><Link to='/consejosseguridad'>Consejos seguridad</Link></button>
      <button className="nav-link"><Link to='/pronostico'>Pronosticos meteorologicos</Link></button>
      <button className="nav-link"><Link to='/mapa'>Mapa de ruta</Link></button>
      <button className="nav-link"><Link to='/alimentación'>alimentacion</Link></button>
      <button className="nav-link"><Link to='/recordatoriohidratacion'>Recordatorio de hidratación</Link></button>
      <button className="nav-link"><Link to='/foro'>Comunidad de apoyo</Link></button>
      <button className="nav-link"><Link to='/recursosnaturales'>Recursos naturales</Link></button>
    </sections>

    <section className="security-advice">
      <img src="" alt="" />
      <article>
        <h2>Consejos de seguridad</h2>
        <p>texto</p>
        <button className="nav-link"><Link to='/consejosseguridad'>acceder</Link></button>
      </article>
      <article>
        <h2>Pronostico y alertas meteorologicas</h2>
        <p>texto</p>
        <button className="nav-link"><Link to='/consejosseguridad'>acceder</Link></button>
      </article>
    </section>

    <section className="routes">
      <img src="" alt="" />
      <article>
        <h2>Mapa de rutas recomendadas</h2>
        <p>texto</p>
        <button className="nav-link"><Link to='/map'>acceder</Link></button>
      </article>
    </section>

    <section className="adaptation">
      <img src="" alt="" />
      <article>
        <h2>adaptación y aclimatación</h2>
        <p>texto</p>
        <button className="nav-link"><Link to='/alimentacion'>acceder</Link></button>
      </article>
      <article>
        <h2>recordatorio de hidratación</h2>
        <p>texto</p>
        <button className="nav-link"><Link to='/recordatoriohidratacion'>acceder</Link></button>
      </article>
    </section>

    <section className="comunity">
      <img src="" alt="" />
      <article>
        <h2>Comunidad y apoyo</h2>
        <p>texto</p>
        <button className="nav-link"><Link to='/foro'>acceder</Link></button>
      </article>
    </section>

    <section className="natural-resources">
      <img src="" alt="" />
      <article>
        <h2>Recursos naturales</h2>
        <p>texto</p>
        <button className="nav-link"><Link to='/recursosnaturales'>Recursos naturales</Link></button>
      </article>
    </section>

    <section className="join-now">
      <h3>UNETE AHORA</h3>
      <div className="reviews">
        <article>
          <p>Esta aplicacion es genial</p>
        </article>
        <article>
          <p>La aplicacion me ha cambiado la vida</p>
        </article>
      </div>
    </section>
    <div>
      <div>
        <button className="nav-link"><Link to='/login'>NUEVO USUSARIO</Link></button>
        {/* icono */}
      </div>
      {/* ICONOS */}
    </div>
  </>;
};

export default Home;
