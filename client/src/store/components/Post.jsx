import styles from "./ProductItem.module.css";

const Post = (props) => {
  return (
    <li className={styles.product}>
      <div>
        <img src={props.imageURL} alt={props.name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.price}>${props.price}</span>
      </div>
      <div className={styles.description}>{props.description}</div>
    </li>
  );
};

export default Post;
