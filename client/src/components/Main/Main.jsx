import React, { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Home/Home'
import Header from '../Header/'
import Register from './Home/Register'
import Login from './Home/Login'
import MapView from './MapView'
import MyProfile from './MyProfile'
import Forum from './Forum'
import ProtectedRoutes from '../../utils/ProtectedRoutes/ProtectedRoutes';
import RoleManager from '../../utils/RoleManager/RoleManager';
import UserForm from './UserForm/UserForm';
import WeatherForecast from './WeatherForecast'

// Define the isMyProfileRoute function here
const isMyProfileRoute = (location) => location.pathname === '/miperfil';

const Main = () => {
  const [logged, setLogged] = useState(true);
  const [role, setRole] = useState('client');
  //  const location = useLocation();

  return (
    <>

      {/* {!isMyProfileRoute && <Header />} */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Register' element={<Register />} />

        <Route
          path='login'
          element={
            <Login
              logged={{ logged, setLogged }}
              role={{ role, setRole }}
            />
          }
        />

        <Route
          path='map'
          element={
            <ProtectedRoutes
              component={
                <RoleManager
                  component={<MapView />}
                  role={role}
                  allowedRoles={["client"]}
                />
              }
              logged={logged}
            />
          }
        />

        <Route
          path='miperfil'
          element={
            <ProtectedRoutes
              component={
                <RoleManager
                  component={<MyProfile />}
                  role={role}
                  allowedRoles={["client"]}
                />
              }
              logged={logged}
            />
          }
        />

        <Route
          path='foro'
          element={
            <ProtectedRoutes
              component={
                <RoleManager
                  component={<Forum />}
                  role={role}
                  allowedRoles={["client"]}
                />
              }
              logged={logged}
            />
          }
        />

        <Route
          path='eltiempo'
          element={
            <ProtectedRoutes
              component={
                <RoleManager
                  component={<WeatherForecast />}
                  role={role}
                  allowedRoles={["client"]}
                />
              }
              logged={logged}
            />
          }
        />

        <Route
          path='cuestionario'
          element={
            <ProtectedRoutes
              component={
                <RoleManager
                  component={<UserForm />}
                  role={role}
                  allowedRoles={["client"]}
                />
              }
              logged={logged}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Main;
