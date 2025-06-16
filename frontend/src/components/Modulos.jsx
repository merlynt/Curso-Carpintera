import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Modulos = () => {
    const [lista, setLista] = useState([]);

    const GetList = () => {
        axios.get("http://localhost:3001/curso")
            .then((response) => {
                setLista(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        GetList();
    }, []);

    return (
        <div>
            <img src="/banner2.jpg" class="card-img-top w-60 h-40" alt="Imagen"></img>
            <div className="d-flex justify-content-between mt-4">
                {lista.map((element, index) => (
                    <div key={index} className="card" style={{ width: "19rem" }}>
                        <img src={element.img} className="card-img-top" alt="Imagen" />
                        <div className="card-body">
                            <h5 className="card-title">Módulo {index + 1}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{element.titulo}</h6>
                            <NavLink to={`/Tema/${index}`} className="btn btn-dark">Ir a modulo</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Modulos;

