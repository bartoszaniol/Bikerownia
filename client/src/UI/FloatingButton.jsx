import styles from "./FloatingButton.module.css";
import MessageIcon from '@mui/icons-material/Message';
import Badge from "./Badge";
const Floating_Button = () => {
  return (
    <div className={styles.wrapper}>
      <Badge></Badge>
      <button type="submit">
        <MessageIcon />
        Messages
      </button>
    </div>
  );
};

export default Floating_Button;
