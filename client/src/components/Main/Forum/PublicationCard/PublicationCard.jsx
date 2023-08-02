import axios from "axios";
import React, { useEffect, useState } from "react";

const PublicationCard = ({ title, text, date, user_id }) => {

  const [userName, setUserName] = useState("")

  useEffect(() => {
    const getUserData = async () => {
      const getUser = await axios.get(`https://backend-app-hbpdfkrhla-ew.a.run.app/api/users/${user_id}`)
      setUserName(getUser.data[0].user_name);
    }

    getUserData()
  }, [])

  return <div className="publication-container">
    <div className="user-publication-info">
      <img src="silluette.jpg" alt="user-img" />
      <div className="user-info">
        {userName.length ? <h2>{userName}</h2> : <></>}
        <h3>{date}</h3>
      </div>
    </div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>;
};

export default PublicationCard;
