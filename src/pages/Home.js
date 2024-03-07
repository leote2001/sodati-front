import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <h2>Hola!</h2>
            <p>En este sitio encontrarás información sobre Gustavo Cerati y Soda Stereo</p>
            <div className="row">
                <div className="col-6">
                    <figure>
                    <Link to="/cerati">
                            Ir a Gustavo Cerati
                            <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gustavo_Cerati_%284120558077%29.jpg/259px-Gustavo_Cerati_%284120558077%29.jpg" alt="Gustavo Cerati tocando en Monterrey" />
                        </Link>
                    </figure>
                </div>
                <div className="col-6">
                    <figure>
                        <Link to="/soda">
                            Ir a Soda Stereo
                        <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/SodaenLima-2100924195.jpg/220px-SodaenLima-2100924195.jpg" alt="Soda Stereo, Perú, 2007" />
                        </Link>
                    </figure>
                </div>
            </div>
        </>
    );
}
export { Home };