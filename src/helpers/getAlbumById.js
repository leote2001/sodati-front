import axios from "axios";
const getAlbumById = async (albumId, artista) => {
const url = `https://sodati-api.portfolio-ls.online/${artista}/${albumId}/album`; 
try {
const response = await axios.get(url);
return response;
} catch(err) {
    throw err;
}
}
export {getAlbumById};