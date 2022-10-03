import styles from "./SearchBar.module.css";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <input type="text" placeholder="Search.." />
        <SearchIcon />
      </div>
    </div> 
  );
};

export default SearchBar;
