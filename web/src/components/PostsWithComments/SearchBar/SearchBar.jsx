import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { searchQuery, handleSearchQueryChange } = props;
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchQueryChange}
      placeholder="Search..."
      className={styles.search_input}
    />
  );
};

export default SearchBar;
