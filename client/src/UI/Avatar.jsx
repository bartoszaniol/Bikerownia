import { useState } from "react";

import styles from "./Avatar.module.css";
import Dropdown from "./Dropdown";

const Avatar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div
      className={styles.avatar}
      onClick={() => {
        setOpenDropdown((prevState) => !prevState);
      }}
    >
      {openDropdown && <Dropdown/>}
    </div>
  );
};

export default Avatar;
