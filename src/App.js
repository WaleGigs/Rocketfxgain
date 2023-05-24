import './App.css';
import { Routes, Route} from "react-router-dom";
import Landing from './landingPage/Landing';
import Testimony from './components/Testimony';

function App() {
  return (

    
    <>

    {/* <Landing /> */}
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='testimony' element={<Testimony />} />
    </Routes>

    </>
 
  );
}

export default App;
