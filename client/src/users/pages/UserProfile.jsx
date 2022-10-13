import Navigation from "../../UI/Navigation";
import Card from "../../UI/Card";
import UserInfo from "../components/UserInfo";
import PostsList from "../../main/components/PostsList";
import styles from './UserProfile.module.css'

const UserDetails = () => {
  return (
    <>
      <Navigation />
      <main className={styles.profile}>
        <Card>
          <UserInfo />
        </Card>
        <Card>
          <PostsList items={[]} />
        </Card>
      </main>
    </>
  );
};

export default UserDetails;
