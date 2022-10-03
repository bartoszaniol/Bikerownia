import Navigation from "../../UI/Navigation";
import Card from "../../UI/Card";
import UserInfo from "../components/UserInfo";
import ProductsList from "../../store/components/ProductsList";

const UserDetails = () => {
  return (
    <>
      <Navigation />
      <Card name="">
        <UserInfo />
      </Card>
      <Card name="list">
        <ProductsList items={[]} />
      </Card>
    </>
  );
};

export default UserDetails;
