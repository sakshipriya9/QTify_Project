// import { Search } from '@mui/icons-material';

// import './SearchBar.css';
// import { useState } from 'react';

// const SearchBar = ({ className }) => {
//   const [values, setValues] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setValues(e.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={className}>
//         <input
//           type="search"
//           placeholder="Search an album of your choice"
//           required
//           value={values}
//           onChange={handleChange}
//         />
//         <button type="submit" className="searchbar-icons">
//           <Search />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;

import { Search } from '@mui/icons-material';
import './SearchBar.css';
import { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';

const SearchBar = ({ className, data }) => {
  const [values, setValues] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
  };

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const menuList = data.map((option) => ({
    title: option.title,
    image: option.image,
    followers: option.follows,
  }));

  return (
    <form onSubmit={handleSubmit}>
      <div className={className}>
        <input
          type="search"
          placeholder="Search an album of your choice"
          required
          value={values}
          onChange={handleChange}
        />
        <button type="submit" className="searchbar-icons">
          <Search />
        </button>
      </div>
      {values.length > 0 && (
        <div className="search-dropdown">
          {menuList.map((option) => (
            <MenuItem
              key={option.title}
              title={option.title}
              image={option.image}
              followers={option.followers}
            />
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;