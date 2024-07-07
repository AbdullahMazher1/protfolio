import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import SkillSet from './components/SkillSet';
import Services from './components/Services';
import SkillsDisplay from './components/SkillsDisplay'
import Profile from './components/Profile'
import Newprojects from './components/Newprojects'
import Contact from './components/Contact';
import Values from './components/Values'
import Footer from './components/Footer'
import Designs from './components/Designs'


function App() {
  return (
    <>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGaXMOvQ2K7jaPz0XKp5vvo5MR"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossOrigin="anonymous"
      ></script>
      <Navbar/>
      <Home/>
      <SkillSet />
      <SkillsDisplay />
      <Services />
      <Profile />
      <Newprojects />
      <Designs/>
      <Contact />
      <Values />
      <Footer />
    </>
  );
}

export default App;
