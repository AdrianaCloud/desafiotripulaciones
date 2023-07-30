import { useState } from 'react';
import Home from './Home/Home'
import { Routes, Route } from "react-router-dom";
import Register from './Home/Register'
import Login from './Home/Login'
import Map from './Map'
import MyProfile from './MyProfile'
import Forum from './Forum'
import ProtectedRoutes from '../../utils/ProtectedRoutes/ProtectedRoutes';
import RoleManager from '../../utils/RoleManager/RoleManager';
import UserForm from './UserForm/UserForm';
import WeatherForecast from './WeatherForecast'

const Main = () => {
  /* faltan las siguientes rutas y componentes:
consejos de seguridad, pronostico, adaptacion y aclimatación, recordatorio de hidratacion, recursos naturales
*/
  const [logged, setLogged] = useState(true); //esta en true simplemente para pruebas, despues cambiar a false para que se cambie a true cuando el usuario este logeado
  const [role, setRole] = useState('client'); //valor inicial de client esta solo para pruebas. Cambiar a string vacio al acabar pruebas
  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Register' element={<Register />} />

      <Route
        path='login'
        element={
          <Login
            logged={{ logged, setLogged }}
            role={{ role, setRole }} />} />

      <Route
        path='map'
        element={<ProtectedRoutes
          component={<RoleManager
            component={<Map />}
            role={role}
            allowedRoles={["client"]} />}
          logged={logged} />} />

      <Route
        path='miperfil'
        element={<ProtectedRoutes
          component={<RoleManager
            component={<MyProfile />}
            role={role}
            allowedRoles={["client"]} />}
          logged={logged} />} />

      <Route
        path='foro'
        element={<ProtectedRoutes
          component={<RoleManager
            component={<Forum />}
            role={role}
            allowedRoles={["client"]} />}
          logged={logged} />} />

      <Route
        path='eltiempo'
        element={<ProtectedRoutes
          component={<RoleManager
            component={<WeatherForecast />}
            role={role}
            allowedRoles={["client"]} />}
          logged={logged} />} />

      <Route
        path='cuestionario'
        element={<ProtectedRoutes
          component={<RoleManager
            component={<UserForm />}
            role={role}
            allowedRoles={["client"]} />}
          logged={logged} />} />
    </Routes>
  </>;
};

export default Main;
