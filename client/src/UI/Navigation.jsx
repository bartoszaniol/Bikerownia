import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

// import SellIcon from "@mui/icons-material/Sell";
import Avatar from "./Avatar";
// import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <Link to="/">Bike market</Link>
      </div>
      <div className="search_bar">
        {/* <SearchBar /> */}
      </div>
      <div className={styles.right_functions}>
        {/* <div className={styles.sell}>
          <SellIcon />
          <Link to="/sell">Sell a bike</Link>
        </div> */}
        <Avatar />
      </div>
    </nav>
  );
};

export default Navigation;
