import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Main/Home'
import Register from './components/Main/Home/Register'
import Login from './components/Main/Home/Login'
import Map from './components/Main/Map'
import MyProfile from './components/Main/MyProfile'
import Forum from './components/Main/Forum'


function App() {
  /* faltan las siguientes rutas y componentes:
  consejos de seguridad, pronostico, adaptacion y aclimatación, recordatorio de hidratacion, recursos naturales
  */
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='map' element={<Map />} />
      <Route path='myprofile' element={<MyProfile />} />
      <Route path='foro' element={<Forum />} />
    </Routes>
  );
}

export default App;
