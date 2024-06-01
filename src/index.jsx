import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//componentes
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Tema from './components/Tema';
import Modulos from './components/Modulos';

//Styles
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Navbar />
        <div className="container my-3">
            <Routes>
                <Route path ="/" element={<Modulos/>}/>
                <Route path ="/contact" element={<Contact />} />
                <Route path ="/Tema/:moduloId" element={<Tema />} />
            </Routes>
        </div>
    </BrowserRouter>
);

