import styles from "./Post.module.css";
import Button from './../../UI/Button'

const Post = (props) => {
  return (
    <li className={styles.product}>
      <div className={styles.imgContainer}>
        <img src={props.imageURL} alt={props.name} className={styles.image} />
      </div>
      <div className={styles.lineBreak}></div>
      <div className={styles.info}>
        <span className={styles.name}>{props.name}</span>
      </div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.functions}>
        <div className={styles.points}>
          <div className={`${styles.vote} ${styles.upVote}`}>+</div>
          <div className={styles.count}>4</div>
          <div className={`${styles.vote} ${styles.downVote}`}>-</div>
        </div>
        <Button>Comment</Button>
      </div>
    </li>
  );
};

export default Post;
