import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./Dropdown.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { useHistory } from "react-router-dom";
const Dropdown = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  return (
    <ul className={styles.menu}>
      <li onClick={() => history.push("/user")}>
        <InventoryIcon />
        <button>My posts</button>
      </li>
      <li onClick={auth.logout}>
        <LogoutIcon />
        <button>Logout</button>
      </li>
    </ul>
  );
};

export default Dropdown;
