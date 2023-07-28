import { Route, Routes, Navigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'



function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
