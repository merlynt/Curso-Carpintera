import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-lg">
                <NavLink className="navbar-brand display-4 ms-2"style={{fontSize: "1.7rem"}} to="/">Carpintería Artesanal</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pricing">Price</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active"  to="/about">About</NavLink>
                        </li>
                
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
