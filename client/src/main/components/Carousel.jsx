import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Carousel.module.css";

const bikeTypes = [
  {
    type: "Road",
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/21/2020/11/Wilier-Filante-SLR-02-b60dbd8.jpg?quality=90&resize=620,413",
  },
  {
    type: "Mountain",
    imageUrl:
      "https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/bikes/category/header/_1200x630_crop_center-center_82_none/21_Alpine_Trail_Family_4_c.jpg?mtime=1609548011",
  },
  {
    type: "Hybrid",
    imageUrl:
      "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dw476c53ca/images/blog/Mountain/mountain-bike-hybrid-bike-pathlite-1.jpg?sw=1064",
  },
  {
    type: "Gravel road",
    imageUrl:
      "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dw4b0f7362/images/plp/Gravel/canyon-bikes-world-gravel-09.jpg?sw=1280&sh=650&sm=cut",
  },
  {
    type: "Folding",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/folding-bike-1621012874.jpg?crop=0.763xw:0.678xh;0.0817xw,0.299xh&resize=1200:*",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        {bikeTypes?.map((bikeType) => (
          <div
            className={styles.card}
            key={bikeType.type}
            onClick={() => {
              console.log(bikeType.type);
            }}
          >
            <img src={bikeType.imageUrl} alt={bikeType.type} />
            <h2>{bikeType.type}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
