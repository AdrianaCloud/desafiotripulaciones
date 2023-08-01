import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../context/userContext";

const Forum = () => {
  const [publication, setPublication] = useState({});

  const [publicationsList, setPublicationsList] = useState([])

  const { userData, setUserData } = useContext(UserContext)

  useEffect(() => {
    const getPublications = async () => {
      const data = await axios.get("https://backend-app-hbpdfkrhla-ew.a.run.app/api/publications")
      console.log(data.data);
      setPublicationsList(data.data)
    }

    getPublications()
  }, [])

  useEffect(() => {
    const getPublications = async () => {
      const data = await axios.get("https://backend-app-hbpdfkrhla-ew.a.run.app/api/publications")
      console.log(data.data);
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

    console.log(postPublication);

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

      {publicationsList.length ? publicationsList.map((item, index) => <article key={index} className="publication">
        <p>{item.title}</p>
        <p>{item.text}</p>
        <p>{item.date.value}</p>
        <p>{item.user_id}</p>
      </article>) : <></>}
    </section>
  </>;
};

export default Forum;
