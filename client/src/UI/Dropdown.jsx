import { Link } from "react-router-dom";

import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from './Dropdown.module.css'
const Dropdown = () => {
  return (
    <ul className={styles.menu}>
        <li>
          <InventoryIcon />
          <Link to="/user">My posts</Link>
        </li>
        <li>
          <LogoutIcon />
          <Link to="/login">Logout</Link>
        </li>
      </ul>
  )
}

export default Dropdown