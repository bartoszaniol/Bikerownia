import styles from "./Modal.module.css";

import Card from "./Card";
import Button from "./Button";

const Modal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onCancel}></div>
      <Card className={styles.modal}>
        <main className={styles.content}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          <input type="image" id="image" alt="Image picker"></input>
        </main>
        <footer className={styles.functions}>
          <Button onClick={props.onCancel}>Cancel</Button>
          <Button onClick={props.onCancel}>Save</Button>
        </footer>
      </Card>
    </>
  );
};

export default Modal;
