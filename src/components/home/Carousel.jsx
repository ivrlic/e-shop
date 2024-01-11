import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {items.map((item) => {
        const uuid = crypto.randomUUID();
        return (
        <div key={uuid}>
          {item}
        </div>
        )
      }
      )}
    </Slider>
  );
};

export default Carousel;