import React from 'react';

import { Chip, Skeleton, Tooltip } from '@mui/material';
const CardSkeleton = () => {
  const style = {
    wrapper: {
      backgroundColor: '#282828',
      padding: '10px',
      borderRadius: '4px',
    },
    imagePlaceholder: {
      backgroundColor: '#CCCCCC',
    },
    chipPlaceholder: {
      backgroundColor: '#CCCCCC',
    },
    titlePlaceholder: {
      backgroundColor: '#CCCCCC',
    },
  };
  return (
    <Tooltip title="Loading..." placement="top" arrow>
      <div style={style.wrapper}>
        <div>
          <Skeleton
            variant="rect"
            width={159}
            height={205}
            style={style.imagePlaceholder}
          />
          <div>
            <Chip
              label={<Skeleton width={80} />}
              size="small"
              style={style.chipPlaceholder}
            />
          </div>
        </div>
        <div>
          <Skeleton width={150} style={style.titlePlaceholder} />
        </div>
      </div>
    </Tooltip>
  );
};

export default CardSkeleton;