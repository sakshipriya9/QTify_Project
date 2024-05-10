import React, { useEffect, useState } from 'react';
import styles from './GridSection.module.css';
import { Box } from '@mui/material';
import Card from '../Card/Card';
import CardSkeleton from '../CardSkeleton/CardSkeleton';

const GridSection = ({ title, data, type }) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const [filterData, setFilterData] = useState(data);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue);
  };

  const generateSongData = (key) => {
    if (key === 'all') {
      setFilterData(data);
    } else {
      const res = data.filter((item) => item.genre.key === key);
      setFilterData(res);
    }
  };

  const filteredData = type === 'song' ? filterData : data;

  useEffect(() => {
    const genres = { 0: 'all', 1: 'rock', 2: 'jazz', 3: 'pop', 4: 'blues' };
    if (value >= 0 && value <= 4) {
      generateSongData(genres[value]);
    }
  }, [data, generateSongData, value]);

  const { gridSection, header, toggleText, cardsWrapper, wrapper } = styles;

  return (
    <div className={gridSection}>
      <div className={header}>
        <h3>{title}</h3>
        <h4 className={toggleText} onClick={handleToggle}>
          {/* {!toggle ? 'Show All' : 'Collapse All'} */}
          {type === 'album' ? (!toggle ? 'Show All' : 'Collapse') : null}
        </h4>
      </div>

      {type === 'song' && (
        <Filter key={value} value={value} handleChange={handleChange} />
      )}

      {data?.length === 0 ? (
        <Box sx={{ display: 'flex', gap: '20px' }}>
          {/* <CircularProgress /> */}
          {Array.from(new Array(1)).map((item, i) => (
            <CardSkeleton key={i}/>
          ))}
        </Box>
      ) : (
        <div className={cardsWrapper}>
          {toggle ? (
  <div className={wrapper}>
    {data.map((item, i) => (
      <Card key={i} data={item} type={type} />
    ))}
  </div>
) : null}

        </div>
      )}
    </div>
  );
};

export default GridSection;