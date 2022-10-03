import LoginForm from "../components/LoginForm";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
      <div className={styles.imageContainer}>
        <img
          src="https://trek.scene7.com/is/image/TrekBicycleProducts/Fuel_EX_HP_Marquee_Media_Reviews_1?$responsive-pjpg$&cache=on,on&wid=1920"
          alt="Bike"
        />
      </div>
    </div>
  );
};

export default Login;
