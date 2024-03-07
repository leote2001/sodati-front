import { getAlbums } from "../helpers/getAlbums";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fnComparacion = (albumA, albumB) => {
    const fechaA = new Date(albumA.release_date);
    const fechaB = new Date(albumB.release_date);
    return fechaB - fechaA;
}
function Albums({ artista }) {
    const [isChecked, setIsChecked] = useState(false);
    const [sortByDate, setSortByDate] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
        setSortByDate(!isChecked);
    };
    const sortAlbums = (data) => {
        if (sortByDate) {
            return data.sort((a, b) => new Date(a.release_date) - new Date(b.release_date)); 
        } else {
            return data.sort(fnComparacion);  
        }
    }
    const { error, data, isLoading, isError } = useQuery({
        queryKey: [`/${artista}`],
        queryFn: () => getAlbums(artista).then(response => response.data)
    });
    return (
        <>
            {isLoading &&
                <p className="alert" role="alert">Cargando...</p>
            }
            {isError &&
                <p className="alert-danger" role="alert">Ocurrió un error! {error.message}</p>
            }
            {data && data.length > 0 &&
                <div className="row">
                <h2>Discos</h2>
                    <div className="col-12 d-flex justify-content-center">
                        <div>
                            <input checked={isChecked} onChange={handleChange} value={"filtro"} type="checkbox" id="mAntiguos" />
                            <label htmlFor="mAntiguos">Más antiguos</label>
                        </div>
                    </div>
                    {sortAlbums(data).map(album => (
                        <div key={album.id} className="col-4">
                            <div className="card">
                                <img src={album.cover_medium} className="card-img-top" alt={`Cover ${album.title}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{album.title}</h5>
                                    <p className="card-text">Fecha de lanzamiento: {album.release_date}</p>
                                    <Link to={`/${artista}/${album.id}/album`} className="btn btn-primary">Más detalles</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
};
export { Albums };