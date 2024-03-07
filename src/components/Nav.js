import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <>
            <nav>
                <ul className="list-unstyled d-flex justify-content-between">
                    <li className="lead"><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink></li>
                    <li className="lead"><NavLink to="/cerati" className={({isActive}) => isActive ? "active" : ""}>Gustavo Cerati</NavLink></li>
                    <li className="lead"><NavLink to="/soda" className={({isActive}) => isActive ? "active" : ""}>Soda Stereo</NavLink></li>
                </ul>
            </nav>
            </>
    );
}
export { Nav };