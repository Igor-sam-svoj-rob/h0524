const SearchPolje = ({ handleFilterChange }) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder="Pretraži"
      onChange={handleFilterChange}
    />
  );
};

export default SearchPolje;
