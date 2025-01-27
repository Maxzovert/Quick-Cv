import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Header />
        <Main />
        <Footer />
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
      </ResumeProvider>
    </Router>
  );
}

export default App;
