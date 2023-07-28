import { useState } from 'react';
import Home from './Home/Home'
import { Routes, Route } from "react-router-dom";
import Register from './Home/Register'
import Login from './Home/Login'
import Map from './Map'
import MyProfile from './MyProfile'
import Forum from './Forum'

const Main = () => {
  /* faltan las siguientes rutas y componentes:
consejos de seguridad, pronostico, adaptacion y aclimatación, recordatorio de hidratacion, recursos naturales
*/

  const [logged, setLogged] = useState(false);
  const [role, setRole] = useState('');
  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='map' element={<Map />} />
      <Route path='myprofile' element={<MyProfile />} />
      <Route path='foro' element={<Forum />} />
    </Routes>
  </>;
};

export default Main;
