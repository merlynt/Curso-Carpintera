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
        <div>
            <div>
                <h3>Temas del Módulo 1</h3>
                {Object.keys(temasModulo1).map((key, temaIndex) => (
                    <div key={temaIndex} className="tema-item">
                        <h4>{temasModulo1[key].titulo}</h4>
                        <p>{temasModulo1[key].descripcion}</p>

                        <div className="card" style={{ width: "20rem" }}>
                            <video controls className="card-img-top" src={temasModulo1[key].video} alt="Video"></video>
                            <div className="card-body">
                                <p className="card-text"></p>
                            </div>
                        </div>
                        <br />

                    </div>


                ))}
            </div>
        </div>
    );
};

export default Tema;

