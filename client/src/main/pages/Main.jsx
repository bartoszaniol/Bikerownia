import styles from "./Main.module.css";
import Navigation from "../../UI/Navigation";
import PostsList from "../components/PostsList";
import Carousel from "../components/Carousel";
import FloatingButton from "../../UI/FloatingButton";

const Main = () => {
  const POSTS = [
    {
      id: 1,
      name: "Cool bike",
      description: "Nice bike",
      imageURL:
        "https://a.allegroimg.com/original/11ae38/b21ea32c4c7e92a0320e7c550793",
    },
    {
      id: 2,
      name: "Better bike",
      description: "Even better bike",
      imageURL:
        "https://cdn.skatepro.com/product/440/radio-legion-26-2022-wheelie-bike-pv.jpg",
    },
    {
      id: 3,
      name: "Cool bike",
      description: "Nice bike",
      imageURL:
        "https://a.allegroimg.com/original/11ae38/b21ea32c4c7e92a0320e7c550793",
    },
    {
      id: 4,
      name: "Cool bike",
      description: "Nice bike",
      imageURL:
        "https://a.allegroimg.com/original/11ae38/b21ea32c4c7e92a0320e7c550793",
    },
  ];

  return (
    <>
      <Navigation />
      <span className={styles.categories}>Categories</span>
      <Carousel />
      <PostsList items={POSTS} />
      <FloatingButton/>
    </>
  );
};

export default Main;
