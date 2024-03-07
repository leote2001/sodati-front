import axios from "axios";
const getAlbums = async (artista) => {
    const url = `https://sodati-api.onrender.com/${artista}`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (err) {
        throw err;
    }
}
export { getAlbums };