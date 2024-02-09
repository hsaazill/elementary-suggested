import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Home from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import HelpPage from './pages/HelpPage';
import { Navigate } from 'react-router-dom';
import CustomizePage from './pages/CustomizePage'
import CustomSideBar from './components/CustomSideBar';
import ButtonPage from './pages/elements/ButtonPage';
import CardsPage from './pages/elements/CardsPage';
import FooterPage from './pages/elements/FooterPage';
import FormPage from './pages/elements/FormPage';
import InputBoxPage from './pages/elements/InputBoxPage';
import LoaderPage from './pages/elements/LoaderPage';
import NavbarPage from './pages/elements/NavbarPage';
import RadioButtonPage from './pages/elements/RadioButtonPage';
import SidebarPage from './pages/elements/SidebarPage';
import TablePage from './pages/elements/TablePage';
import ToggleButtonPage from './pages/elements/ToggleButtonPage';

function App() {
  
  return (  
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/signup" element = {<SignUp/>} />
          <Route path="/help" element = {<HelpPage/>}/>
          <Route path="/customize" element = {<CustomizePage/>}/>
          <Route path="/customsidebar" element = {<CustomSideBar/>}/>

          {/* START OF ELEMENTS PAGE ROUTES */}
          <Route path="/button" element = {<ButtonPage/>}/>
          <Route path="/cards" element = {<CardsPage/>}/>
          <Route path="/footer" element = {<FooterPage/>}/>
          <Route path="/form" element = {<FormPage/>}/>
          <Route path="/inputbox" element = {<InputBoxPage/>}/>
          <Route path="/loader" element = {<LoaderPage/>}/>
          <Route path="/navbar" element = {<NavbarPage/>}/>
          <Route path="/radiobutton" element = {<RadioButtonPage/>}/>
          <Route path="/sidebar" element = {<SidebarPage/>}/>
          <Route path="/table" element = {<TablePage/>}/>
          <Route path="/toggle" element = {<ToggleButtonPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
