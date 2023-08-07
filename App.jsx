import React from 'react';
import { Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
const App=()=>{
    return(
        <>
        <Navbar/>
            <Routes>
<Route path='/' Component={Home}/>
<Route path='/about' Component={About}/>
<Route path='/contact' Component={Contact}/>
<Route path='/service' Component={Service}/>
            </Routes>
           
        </>
    )

}

export default App;