import styles from "./Store.module.css";
import Navigation from "../../UI/Navigation";
import PostsList from "../components/PostsList";
import Carousel from "../components/Carousel";
import FloatingButton from "../../UI/FloatingButton";

const Store = () => {
  const PRODUCT_ITEMS = [
    {
      id: 1,
      name: "Cool bike",
      price: 100,
      description: "Nice bike",
      imageURL:
        "https://a.allegroimg.com/original/11ae38/b21ea32c4c7e92a0320e7c550793",
    },
    {
      id: 2,
      name: "Better bike",
      price: 300,
      description: "Even better bike",
      imageURL:
        "https://cdn.skatepro.com/product/440/radio-legion-26-2022-wheelie-bike-pv.jpg",
    },
    {
      id: 3,
      name: "Cool bike",
      price: 100,
      description: "Nice bike",
      imageURL:
        "https://a.allegroimg.com/original/11ae38/b21ea32c4c7e92a0320e7c550793",
    },
    {
      id: 4,
      name: "Cool bike",
      price: 100,
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
      <PostsList items={PRODUCT_ITEMS} />
      <FloatingButton/>
    </>
  );
};

export default Store;
