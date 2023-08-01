import { Route, Routes, Navigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useContext, useState } from 'react'
import { UserContext } from './context/userContext'

function App() {

  const [userData, setUserData] = useState({
    logged: false,
    role: ''
  })

  const user = {
    userData,
    setUserData
  }

  return <>

    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={user} >
          <Header />
          <Main />
        </UserContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  </>
}

export default App;
