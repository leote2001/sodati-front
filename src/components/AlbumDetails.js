/*eslint-disable*/ 
import { useQueries } from "@tanstack/react-query";
import {AlbumTracklist} from "./AlbumTracklist";
import { getAlbumById } from "../helpers/getAlbumById";
import { getAlbumTracklist } from "../helpers/getAlbumTracklist";
import { useParams } from "react-router-dom";

function AlbumDetails({ artista }) {
    const { id } = useParams();
    const results = useQueries({
        queries: [
            {
                queryKey: ["album"],
                queryFn: () => getAlbumById(id, artista).then(response => response.data)
            },
            {
                queryKey: ["tracklist"],
                queryFn: () => getAlbumTracklist(id, artista).then(response => response.data)
            }
        ]
    });
    const {data: albumData, isLoading: isLoadingAlbum, isError: isErrorAlbum, error: errorAlbum} = results[0];
    const {data: tracklistData, isLoading: isLoadingTracklist, isError: isErrorTracklist, error: errorTracklist} = results[1];
    return (
        <>        
        <div>
                    <button className="btn btn-primary" onClick={() => window.history.back()}>Volver</button>
                </div>
            {isLoadingAlbum || isLoadingTracklist &&
                <p className="alert" role="alert">Cargando...</p>
            }
{isErrorAlbum || isErrorTracklist &&
                <p className="alert-danger" role="alert">Ocurrió un error!</p>
}            
            {albumData && albumData.length > 0 && tracklistData && tracklistData.length > 0 &&
                <>
                <h2>Detalles</h2>
                    <div className="card">
                        <img src={albumData[0].cover_medium} className="card-img-top" alt={`Cover ${albumData[0].title}`} />
                        <div className="card-body">
                            <h5 className="card-title">{albumData[0].title}</h5>
                            <p className="card-text">Fecha de lanzamiento: {albumData[0].release_date}</p>
                            <a className="btn btn-primary" target="_blank" href={albumData[0].link}>Ver en Deezer</a>
                        </div>
                    </div>
                    <AlbumTracklist data={tracklistData} />
                </>
            }
        </>
    )
};
export { AlbumDetails };