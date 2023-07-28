import React from "react";


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
      <button>Consejos seguridad</button>
      <button>Pronosticos meteorologicos</button>
      <button>Mapa de ruta</button>
      <button>alimentacion</button>
      <button>Recordatorio de hidratación</button>
      <button>Comunidad de apoyo</button>
      <button>Recursos naturales</button>
    </sections>

    <section className="security-advice">
      <img src="" alt="" />
      <article>
        <h2>Consejos de seguridad</h2>
        <p>texto</p>
        <button>acceder</button>
      </article>
      <article>
        <h2>Pronostico y alertas meteorologicas</h2>
        <p>texto</p>
        <button>acceder</button>
      </article>
    </section>

    <section className="routes">
      <img src="" alt="" />
      <article>
        <h2>Mapa de rutas recomendadas</h2>
        <p>texto</p>
        <button>acceder</button>
      </article>
    </section>

    <section className="adaptation">
      <img src="" alt="" />
      <article>
        <h2>adaptación y aclimatación</h2>
        <p>texto</p>
        <button>acceder</button>
      </article>
      <article>
        <h2>recordatorio de hidratación</h2>
        <p>texto</p>
        <button>acceder</button>
      </article>
    </section>

    <section className="comunity">
      <img src="" alt="" />
      <article>
        <h2>Comunidad y apoyo</h2>
        <p>texto</p>
        <button>acceder</button>
      </article>
    </section>

    <section>
      <article>
        <img src="" alt="" />
        <h2>monitoreo de condiciones en tiempo real</h2>
        <p>texto</p>
        <button>acceder</button>
      </article>
      <article>
        <img src="" alt="" />
        <h2>Recursos Naturales</h2>
        <p>texto</p>
        <button>acceder</button>
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
        <button>NUEVO USUARIO</button>
        {/* icono */}
      </div>
      {/* ICONOS */}
    </div>
  </>;
};

export default Home;
