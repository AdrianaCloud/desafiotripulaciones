import React, { useState, useContext } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Home/Home'
import Header from '../Header/'
import Register from './Home/Register'
import Login from './Home/Login'
import MapView from './MapView'
import MyProfile from './MyProfile'
import Forum from './Forum'
import EditProfile from './Home/MyProfile/EditProfile/EditProfile';
import ConsejosSeguridad from './Home/ConsejosSeguridad/ConsejosSeguridad'
import ProtectedRoutes from '../../utils/ProtectedRoutes/ProtectedRoutes';
import RoleManager from '../../utils/RoleManager/RoleManager';
import UserForm from './UserForm/UserForm';
import WeatherForecast from './WeatherForecast'
import { UserContext } from '../../context/userContext';

// Define the isMyProfileRoute function here
const isMyProfileRoute = (location) => location.pathname === '/miperfil';

const Main = () => {
  //  const location = useLocation();

  const { userData, setUserData } = useContext(UserContext)
  const [query, setQuery] = useState({})



  return (
    <>

      {/* {!isMyProfileRoute && <Header />} */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Register' element={<Register />} />


        <Route element={
          <Login
            logged={userData.logged}
            role={userData.role} />}
          path="login" />

        <Route
          path='mapa'
          element={
            <ProtectedRoutes
              component={
                <RoleManager
                  component={<MapView />}
                  role={userData.role}
                  allowedRoles={["user"]}
                />
              }
              logged={userData.logged}
            />
          }
        />

        <Route
          path='miperfil'
          element={
            <ProtectedRoutes
              component={
                <RoleManager
                  component={<MyProfile onQuery={setQuery} />}
                  role={userData.role}
                  allowedRoles={["user"]}
                />
              }
              logged={userData.logged}
            />
          }
        />

        <Route
          path='editarperfil'
          element={
            <ProtectedRoutes
              component={
                <RoleManager
                  component={<EditProfile query={query} />}
                  role={userData.role}
                  allowedRoles={["user"]}
                />
              }
              logged={userData.logged}
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
                  role={userData.role}
                  allowedRoles={["user"]}
                />
              }
              logged={userData.logged}
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
                  role={userData.role}
                  allowedRoles={["user"]}
                />
              }
              logged={userData.logged}
            />
          }
        />

        <Route
          path='consejosseguridad'
          element={
            <ProtectedRoutes
              component={
                <RoleManager
                  component={<ConsejosSeguridad />}
                  role={userData.role}
                  allowedRoles={["user"]}
                />
              }
              logged={userData.logged}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Main;
