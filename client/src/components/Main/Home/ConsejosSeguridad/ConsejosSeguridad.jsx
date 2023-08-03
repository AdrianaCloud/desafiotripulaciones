import React from "react";
import HeaderTwo from '../../../HeaderTwo/HeaderTwo'

const ConsejosSeguridad = () => {
  return <>
    <HeaderTwo />
    <div className="security-advice-container">
      <h2>Consejos de seguridad</h2>
      <section className="advices">
        <article className="advice">
          <h3>Bebe, bebe y... bebe</h3>
          <div className="content">
            <img src="./consejosSeguridad/consejo6.png" alt="" />
            <p>Lo más agradable es beber agua rica en sodio a pequeños sorbos mientras haces deporte</p>
          </div>
        </article>
        <article className="advice">
          <h3>Frutas y verduras</h3>
          <div className="content">
            <img src="./consejosSeguridad/consejo4.png" alt="" />
            <p>Los ayudantes vitales para nuestro cuerpo</p>
          </div>
        </article>
        <article className="advice">
          <h3>Ropa Funcional</h3>
          <div className="content">
            <img src="./consejosSeguridad/consejo2.png" alt="" />
            <p>Reduce tu temperatura corporal</p>
          </div>
        </article>
        <article className="advice">
          <h3>Adapta la intencidad</h3>
          <div className="content">
            <img src="./consejosSeguridad/consejo5.png" alt="" />
            <p>5 pulsaciones por debajo del nivel norma</p>
          </div>
        </article>
        <article className="advice">
          <h3>Deportes al aire libre</h3>
          <div className="content">
            <img src="./consejosSeguridad/consejo3.png" alt="" />
            <p>Lo más agradable es beber agua rica en sodio a pequeños sorbos mientras haces deporte</p>
          </div>
        </article>
        <article className="advice">
          <h3>Escucha a tu cuerpo</h3>
          <div className="content">
            <img src="./consejosSeguridad/consejo1.png" alt="" />
            <p>Es conveniente reducir paulatinamente el esfuerzo hasta parar completamente.</p>
          </div>
        </article>
      </section>
    </div>
  </>;
};

export default ConsejosSeguridad;
