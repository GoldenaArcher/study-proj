import React from 'react';
import faSearch from '../../../asset/img/header/fa-search.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" name="" id="" placeholder="输入关键字" />
      <input
        type="button"
        value=""
        style={{ backgroundImage: `url(${faSearch})` }}
      />
    </div>
  );
};

export default SearchBar;
