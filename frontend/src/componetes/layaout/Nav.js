import { NavLink } from 'react-router-dom';

import '../../estilos/components/layout/Nav.css'

const Nav = (props) => {
    return (
    <nav>
       <div className="holder">
        <ul>
            <li><NavLink className="activo" exact="true" to="/">Home</NavLink></li>
            <li><NavLink className="activo" exact="true" to="/nosotros">Nosotros</NavLink></li>
            <li><NavLink className="activo" exact="true" to="/novedades">Novedades</NavLink></li>
            <li><NavLink className="activo" exact="true" to="/contacto">contacto</NavLink></li>
        </ul>
       </div>
    </nav>
    );
}
export default Nav;