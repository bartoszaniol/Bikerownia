import { useState } from "react";
import styles from "./UserInfo.module.css";
import Button from "../../UI/Button";

const UserInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const User = {
    name: "KEKE",
    phone_number: 123,
    other: "yes",
    rating: 4,
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.avatar}></div>
        <ul
          className={`${styles.info_list} ${!isEditing ? styles.display : ""}`}
        >
          <li>
            <label htmlFor="">Name</label>
            {isEditing ? (
              <input type="text" value={User.name} />
            ) : (
              <span>{User.name}</span>
            )}
          </li>
          <li>
            <label htmlFor="">Phone number</label>
            {isEditing ? (
              <input type="text" value={User.phone_number} />
            ) : (
              <span>{User.phone_number}</span>
            )}
          </li>
          <li>
            <label htmlFor="">Some other stuff</label>
            {isEditing ? (
              <input type="text" value={User.other} />
            ) : (
              <span>{User.other}</span>
            )}
          </li>
          {/* <li>
            <div>Rating</div>
            {User.rating}/5 ⭐
          </li> */}
          <div className={styles.button}>
            {isEditing ? (
              <Button
                type="submit"
                onClick={() => {
                  setIsEditing(false);
                }}
              >
                {" "}
                Save
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                {" "}
                Edit
              </Button>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default UserInfo;
