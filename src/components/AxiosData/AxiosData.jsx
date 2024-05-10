import axios from "axios";
let BackEndPoint = `https://qtify-backend-labs.crio.do/`;

export const getUId = () => {
    let id = Math.random().toString(36).substr(3, 9);
    return id;
  };

/**
 * Fetches data for top albums.
 * @returns {Promise} A Promise that resolves to the response data if successful, or null if an error occurs.
 */
export const topAlbumData = async () => {
    try {
        let res = await axios.get(`${BackEndPoint}albums/top`);
        // console.log(res)
        return res.data;
    } catch (e) {
        console.log(`error from AxiosData Component ->`, e);
        return null;
    }
};

/**
 * Fetches data for new albums.
 * @returns {Promise} A Promise that resolves to the response data if successful, or null if an error occurs.
 */
export const newAlbumData = async () => {
    try {
        let res = await axios.get(`${BackEndPoint}albums/new`);
        return res.data;
    } catch (e) {
        console.log(`error from AxiosData Component ->`, e);
        return null;
    }
};
