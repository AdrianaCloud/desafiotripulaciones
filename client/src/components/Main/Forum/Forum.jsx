import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "../../../context/userContext";
import PublicationCard from "./PublicationCard";
import { IonIcon } from '@ionic/react';
import { arrowBackOutline } from "ionicons/icons";
import HeaderTwo from '../../HeaderTwo/HeaderTwo';

const Forum = () => {
  const [publication, setPublication] = useState({});

  const [publicationsList, setPublicationsList] = useState([])

  const { userData, setUserData } = useContext(UserContext)
  const navigate = useNavigate();
  useEffect(() => {
    const getPublications = async () => {
      const data = await axios.get("https://backend-app-hbpdfkrhla-ew.a.run.app/api/publications")
      setPublicationsList(data.data)
    }

    getPublications()
  }, [])

  useEffect(() => {
    const getPublications = async () => {
      const data = await axios.get("https://backend-app-hbpdfkrhla-ew.a.run.app/api/publications")
      setPublicationsList(data.data)
    }

    getPublications()
  }, [publication])

  const handlePublicationForm = async (e) => {
    e.preventDefault();
    const publication = {
      "title": e.target.titulo.value,
      "text": e.target.texto.value,
      "user_id": userData.email,
      "item_id": "null",
      "alert": false
    }

    const postPublication = await axios.post("https://backend-app-hbpdfkrhla-ew.a.run.app/api/publications", publication)

    e.target.texto.value = ""
    e.target.titulo.value = ""

    setPublication(publication)
  }

  const handleGoBackBtn = () => {
    navigate(-1)
  }

  return <>
    <HeaderTwo />
    <section className="post-publication-form">
      <h2>Comunidad y apoyo</h2>
      <form action="" onSubmit={handlePublicationForm}>
        <div className="input-text-form">
          <label htmlFor="titulo">Título</label>
          <input name="titulo" id="titulo" type="text" placeholder="titulo de publicacion" />
        </div>

        <div className="input-text-form">
          <label htmlFor="texto">Descripción</label>
          <textarea name="texto" id="texto" cols="40" rows="10"></textarea>
        </div>
        <button type="submit" className="form-btn">Enviar</button>
      </form>
    </section>

    {publicationsList.length ?

      <article className="publications-container">
        {
          publicationsList.map((item, index) => <PublicationCard key={index} title={item.title} text={item.text} date={item.date.value} user_id={item.user_id} className="publication"></PublicationCard>)
        }
      </article>

      : <></>}
  </>;
};

export default Forum;
