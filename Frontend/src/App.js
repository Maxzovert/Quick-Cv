import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Route, Routes , useLocation} from 'react-router-dom';
import Login from './components/LoginSignUp/Login'; 
import Signup from './components/LoginSignUp/SignUp';
function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return (
<Router> 
      <ResumeProvider>
        <Navbar />
        <ConditionalRendering/>
        <Footer />
      </ResumeProvider>
    </Router>
  );
}

const ConditionalRendering = () => {
  const location = useLocation();
  if(location.pathname === '/login' || location.pathname === '/signup'){
  return(
    <Routes>
    <Route path="/login" element={<Login />} /> 
    <Route path="/signup" element={<Signup />} /> 
  </Routes>
  );
}
  return(
    <>
            <Header />
            <Main />
    </>
  )
}

export default App;
