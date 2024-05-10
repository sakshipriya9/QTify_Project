import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import HerSection from './components/HeroSection/HeroSection';
import GridSection from './components/GridSection/GridSection';
import { fetchNewAlbums, fetchTopAlbums } from './api/api';

const App = () => {

  const [dataTopAlbums, setDataTopAlbums] = useState([]);
  const [dataNewAlbum, setDataNewAlbum] = useState([]);

  const getDataTopAlbums = async () => {
    try {
      const res = await fetchTopAlbums();
      // console.log("Top Albums:", res);
      setDataTopAlbums(res);
    } catch (error) {
      console.error(error)
    }
  }

  const getDataNewAlbums = async () => {
    try {
      const res = await fetchNewAlbums();
      // console.log("New Albums:", res);
      setDataNewAlbum(res);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDataTopAlbums();
    getDataNewAlbums(); 
  }, [])

  return (
    <div>
      <NavBar data={dataTopAlbums} />
      <HerSection />
      <GridSection title={"Top Albums"} data={dataTopAlbums} type={"album"} />
      <GridSection title={"New Albums "} data={dataNewAlbum} type={"album"} />
    </div>
  )
}

export default App;