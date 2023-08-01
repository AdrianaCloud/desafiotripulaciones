import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Forum = () => {
  const [publication, setPublication] = useState({});
  useEffect(() => {
    const completeProfile = async () => {
      try {
        const response = await axios.post('https://backend-app-hbpdfkrhla-ew.a.run.app/api/complete-profile', publication, {

        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    completeProfile();
  }, [publication])

  const handlePublicationForm = (e) => {
    e.preventDefault();
    // este formulario manda los datos a la tabla de profile. Cual es la ruta?
    //este boton redirecciona al componente myprofile
    //guardo la informacion de cada valor de los inputs en useState?
    const publication = {
      "titulo": e.target.titulo.value,
      "texto": e.target.texto.value,
    }
    setPublication(publication)
  }
  return <>
    <section className="post-publication-form">
      <h2>Comunidad de apoyo</h2>
      <form action="" onSubmit={handlePublicationForm}>
        <input name="titulo" type="text" placeholder="Introduce un titulo para la publicacion" />
        <textarea name="texto" id="" cols="30" rows="5"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  </>;
};

export default Forum;
