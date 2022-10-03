import styles from "./FloatingButton.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "./Badge";
const Floating_Button = () => {
  return (
    <div className={styles.wrapper}>
      <Badge></Badge>
      <button type="submit">
        <ShoppingCartIcon />
        Checkout
      </button>
    </div>
  );
};

export default Floating_Button;
