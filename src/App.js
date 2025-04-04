import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Pages/Home.jsx';
import About from './Components/Pages/About.jsx';
import Contact from './Components/Pages/Contact.jsx';
import ProjectList from './Components/Pages/ProjectList.jsx';
import Projects from './Components/Pages/Projects.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projectlist' element={<ProjectList/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>



      </BrowserRouter>

    </div>
  );
}

export default App;
