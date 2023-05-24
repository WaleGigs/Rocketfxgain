import {  Routes, Route,  } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
// import '../src/index.css'
// import '../src/App.css'
import ForgottenPassword from './ForgottenPassword';
function App() {
  // const Navigate = useNavigate()
  return (
    <>
      <Routes> 
        {/* <Route path='*' element={<Navigate to="/home" />} /> */}
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/reset' element={<ForgottenPassword />} />
       
      </Routes>
     
    </>
  );
}
export default App;