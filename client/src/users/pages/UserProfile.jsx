import Navigation from "../../UI/Navigation";
import Card from "../../UI/Card";
import UserInfo from "../components/UserInfo";
import PostsList from "../../store/components/PostsList";

const UserDetails = () => {
  return (
    <>
      <Navigation />
      <Card name="">
        <UserInfo />
      </Card>
      <Card name="list">
        <PostsList items={[]} />
      </Card>
    </>
  );
};

export default UserDetails;
