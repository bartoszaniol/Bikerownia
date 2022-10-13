import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Modal from "./Modal";

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <Link to="/">Bikerownia</Link>
        </div>
        <div className={styles.search}>
          <SearchBar />
        </div>
        <div className={styles.right_functions}>
          <div
            className={styles.add}
            onClick={() => setOpenModal(true)}
          >
            Add new post
          </div>
          <Avatar />
        </div>
      </nav>
      {openModal && <Modal onCancel={() => setOpenModal(false)}/>}
    </>
  );
};

export default Navigation;
