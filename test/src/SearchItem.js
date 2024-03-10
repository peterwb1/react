const SearchItem = ({ search, setSearch }) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchItem">Search</label>
            <input
                id="searchItem"
                type="text"
                placeholder="Search for an item"
                //role="searchbox"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
};

export default SearchItem;