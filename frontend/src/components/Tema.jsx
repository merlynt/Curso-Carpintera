import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Tema = () => {
    const { moduloId } = useParams();
    const [lista, setLista] = useState([]);
    const [temaActual, setTemaActual] = useState();

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
    const temasModulo1 = lista.length > 0 ? lista[moduloId]?.temas || {} : {};

    useEffect(() => {
        const keys = Object.keys(temasModulo1);
        if (keys.length > 0 && !temaActual) {
            setTemaActual(keys[0]);
        }
    }, [temasModulo1, temaActual]);


    return (
        <div className="container-fluid d-flex mt-2">
            {/* Sidebar */}
            <div
                className="sidebar d-flex flex-column p-4 bg-dark text-white shadow rounded-4 m-4"
                style={{
                    backgroundColor: 'rgba(78, 52, 46, 0.95)',
                    minHeight: '90vh',
                    width: '580px'
                }}
            >
                <img src="/carpintero.png" alt="logo" className="w-50 mx-auto mb-3" />
                <h5 className="text-center mb-4">Índice</h5>
                <ul className="nav nav-pills flex-column fs-5 gap-2">
                    {Object.keys(temasModulo1).map((key) => (
                        <li className="nav-item" key={key}>
                            <button
                                className={`nav-link text-start w-100 btn ${temaActual === key
                                    ? 'fw-bold bg-light text-dark shadow-sm'
                                    : 'text-white btn-outline-light'
                                    }`}
                                style={{ borderRadius: '10px' }}
                                onClick={() => setTemaActual(key)}
                            >
                                {temasModulo1[key].titulo}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-grow-1 p-5 bg-white m-4 rounded-4 shadow-sm">

                {temaActual && temasModulo1[temaActual] && (
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="bg-light p-4 rounded-4 shadow-sm border-start border-5 border-dark">
                                <h2 className="mb-3 fw-bold text-cafe" style={{ color: '#4E342E' }}>
                                    {temasModulo1[temaActual].titulo}
                                </h2>
                                <p className="fs-5 mb-0">
                                    <strong>Competencia de la clase:</strong> {temasModulo1[temaActual].descripcion}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                                    <iframe
                                        src={temasModulo1[temaActual].video.replace("watch?v=", "embed/")}
                                        title="Video del tema"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-100 h-100 border-0"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex flex-column justify-content-between">
                            <div className="bg-secondary text-white rounded-4 p-4 mb-3 shadow-sm h-100">
                                <p className="fs-6 mb-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi, fugiat enim quos sunt nam nobis. Nihil, consequatur asperiores...
                                </p>
                            </div>
                            <div className="d-flex gap-3">
                                <button className="btn btn-dark flex-grow-1">Descargar tema</button>
                                <button className="btn btn-outline-dark flex-grow-1">Siguiente</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tema;



