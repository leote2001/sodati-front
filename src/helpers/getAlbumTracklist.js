import axios from "axios";
const getAlbumTracklist = async (albumId, artista) => {
    const url = `https://sodati-api.onrender.com/${artista}/${albumId}/tracks`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (err) {
        throw err;
    }
}
export { getAlbumTracklist };