import { NavLink, Outlet } from "react-router-dom";
function LayoutArtista({ artista, rutaArtista, texto }) {
    return (
        <>
        <h2>{artista}</h2>
        <figure>
        {artista === "Gustavo Cerati" ? 
        <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Soda_Stereo_en_Santiago_de_Chile.jpg/189px-Soda_Stereo_en_Santiago_de_Chile.jpg" alt="Gustavo Cerati con su PRS Multifoil" />
        :
        <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Soda_Stereo_1986.png/220px-Soda_Stereo_1986.png" alt="Soda Stereo en una foto de prensa para Nada personal. Buenos Aires, 1986." />
        }
        </figure>
            <nav aria-label={`navegación ${artista}`}>
                <ul className="list-unstyled d-flex justify-content-between">
                    <li className="lead"><NavLink to={`${rutaArtista.bio}`} className={({isActive}) => isActive ? "active" : ""}>{texto}</NavLink></li>
                    <li className="lead"><NavLink to={`${rutaArtista.discos}`} className={({isActive}) => isActive ? "active" : ""}>Discos</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
export { LayoutArtista };