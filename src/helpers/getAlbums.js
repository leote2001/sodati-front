import axios from "axios";
const getAlbums = async (artista) => {
    const url = `https://sodati-api.portfolio-ls.online/${artista}`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (err) {
        throw err;
    }
}
export { getAlbums };