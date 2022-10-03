import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface Functions {
  type?: any;
  text?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Functions> = (props) => {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
