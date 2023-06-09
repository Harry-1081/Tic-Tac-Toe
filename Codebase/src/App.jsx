import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { States } from './States';
import Game from './Game/Game';
import Start from './Start/Start';

function App() {
  return (
   <>
    <BrowserRouter>
    <States>
      <Routes>


        <Route
          path='/'
          element=
          {
            <>
            <Start/>
            </>
          }
          />

        <Route
          path='/game'
          element=
          {
            <>
            <Game/>
            </>
          }
        />

      </Routes>
    </States>
    </BrowserRouter>
   </>
  );
}

export default App;
