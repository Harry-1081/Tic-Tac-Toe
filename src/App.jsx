import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Landing from './LandingPage/LandingPage';
import MainPage from './MainPage/MainPage';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>

        <Route
          path='/'
          element=
          {
            <>
            <Landing/>
            </>
          }
        />

        <Route
          path='/game'
          element=
          {
            <>
            <MainPage/>
            </>
          }
        />

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
