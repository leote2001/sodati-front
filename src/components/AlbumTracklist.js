import { durationInMinutes } from "../helpers/durationInMinutes";
import { useEffect, useState } from "react";

const audio = new Audio();

function AlbumTracklist({ data }) {
    const [isPlaying, setIsPlaying] = useState(null);
    const [repro, setRepro] = useState(false);
    // eslint-disable-next-line
    const [audioEnded, setAudioEnded] = useState(false);
    const reproducción = (audioTrack, audioId) => {
        audio.src = audioTrack;
        setIsPlaying(audioId);
        // eslint-disable-next-line
        if (!repro || audio.currentSrc != audioTrack) {
            setRepro(true);
            setAudioEnded(false);
            audio.play();
        } else {
            audio.pause();
            setRepro(false);
        }
    }
    useEffect(() => {
        const handleAudioEnd = () => {
            setRepro(false);
            setAudioEnded(true);
        }
        audio.addEventListener("ended", handleAudioEnd);
        return () => {
            audio.removeEventListener("ended", handleAudioEnd);
            audio.pause();
        }
    }, []);
    return (
        <>
            <div className="d-flex justify-content-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Duración</th>
                            <th>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(cancion => (
                            <tr key={cancion.id}>
                                <td>{cancion.track_position}</td>
                                <td>{cancion.title}</td>
                                <td>{durationInMinutes(cancion.duration)}</td>
                                {// eslint-disable-next-line
                                    <td><button style={repro && cancion.id == isPlaying ? { color: "lightgreen" } : null} className="btn btn-primary" onClick={() => reproducción(cancion.preview, cancion.id)}>{repro && cancion.id == isPlaying ? "En reproducción" : "Reproducir"}</button></td>
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                <button className="btn btn-primary" onClick={() => window.history.back()}>Volver</button>
                </div>
            </div>
        </>
    )
};
export { AlbumTracklist };