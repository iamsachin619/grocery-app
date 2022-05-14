import {Carousel} from 'rsuite'

import b1 from "../../assets/banner_1.jpg";
import b2 from "../../assets/banner_2.jpg";
import b3 from "../../assets/banner_3.jpg";

const Corusal = (props) => {
  return (
    <Carousel autoplay className="custom-slider">
    <img src={b1}  />
    <img src={b2}  />
    <img src={b3}  />

  </Carousel>
  );
};

export default Corusal;
