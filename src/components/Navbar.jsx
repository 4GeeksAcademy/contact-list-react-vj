import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
			<div className="container">
				<Link to="/" className="btn primary">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<ul className="navbar-nav me-auto mb-2">

					<li className="btn bg-secondary nav-item"> 
						<Link to="/contacts" className="nav-link" style={{color: "white"}}>Contactos</Link> 
					</li>
					<li className="btn bg-secondary mx-2 nav-item" > 
						<Link to="/addcontact" className="nav-link" style={{color: "white"}}>Añadir contacto</Link>
					</li>
					
				</ul>
				
			</div>
		</nav>
	);
};