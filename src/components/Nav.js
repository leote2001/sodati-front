import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <>
            <nav>
                <ul className="list-unstyled d-flex justify-content-between">
                    <li className="lead"><NavLink to="/" activeClassName="active">Inicio</NavLink></li>
                    <li className="lead"><NavLink to="/cerati" activeClassName="active">Gustavo Cerati</NavLink></li>
                    <li className="lead"><NavLink to="/soda" activeClassName="active">Soda Stereo</NavLink></li>
                </ul>
            </nav>
            </>
    );
}
export { Nav };