// eslint-disable-next-line react/prop-types
const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <>
      <div className="search-engine">
        <input
          type="text"
          placeholder="Enter City Name"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className="search-btn" onClick={() => handleSearch()}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
