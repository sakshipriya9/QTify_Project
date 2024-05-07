import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchData = async (endpoint) => {
  try {
    const { data } = await axios.get(`${BACKEND_ENDPOINT}${endpoint}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTopAlbums = async () => fetchData("/albums/top");
export const fetchNewAlbums = async () => fetchData("/albums/new");
export const fetchSongs = async () => fetchData("/songs");
