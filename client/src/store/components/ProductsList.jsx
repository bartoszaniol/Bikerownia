import React from "react";

import Post from "./Post";
import styles from "./ProductsList.module.css";

const ProductsList = (props) => {
  if (props.items.length === 0) {
    return <div>No products found</div>;
  }
  return (
    <ul className={styles["products-list"]}>
      {props.items.map((product) => (
        <Post
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          imageURL={product.imageURL}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
