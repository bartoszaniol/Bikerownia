import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <li className={styles.product}>
      <div className={styles.imgContainer}>
        <img src={props.imageURL} alt={props.name} className={styles.image} />
      </div>
      <div className={styles.lineBreak}></div>
      <div className={styles.info}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.price}>${props.price}</span>
      </div>
      <div className={styles.description}>{props.description}</div>
    <button>Comment</button>
    </li>
  );
};

export default Post;
