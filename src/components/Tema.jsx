import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Tema = () => {
    const { moduloId } = useParams();
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

    // Obtener solo los temas del módulo
    const temasModulo1 = lista.length > 0 ? lista[moduloId].temas : {};
    return (
        <div className="container">
            <br />
            <h4 className="text-center">Temas del Módulo</h4>
            <br />
            <div className="row">
                {Object.keys(temasModulo1).map((key, temaIndex) => (
                    <div key={temaIndex} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{temasModulo1[key].titulo}</h5>
                                <p className="card-text">{temasModulo1[key].descripcion}</p>
                                <a href={temasModulo1[key].video} target="_blank" rel="noopener noreferrer" className="d-block">
                                    <img src={temasModulo1[key].miniatura} alt="Miniatura del video" className="img-fluid card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
                                </a>
                                <p className="text-center mt-2 text-muted">Haz clic en la miniatura para ver el video</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
    
    
};

export default Tema;

