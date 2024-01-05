
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Profile from './pages/profile/Profile.jsx';
import SignIn from './pages/signIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword.jsx';
import Offers from './pages/offers/Offers.jsx';
function App() {
  return (

      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/Profile" element={<Profile />}/>
         <Route path="/signin" element={<SignIn />}/>
         <Route path="/signUp" element={<SignUp />}/>
         <Route path="/ForgetPassword" element={<ForgetPassword />}/>
         <Route path="/Offers" element={<Offers />}/>
         
      </Routes>
      </BrowserRouter>

  );
}

export default App;
