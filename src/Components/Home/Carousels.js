import Carousel from "react-bootstrap/Carousel";
import "./Home.css"

import applec from "../../Images/Apple-Iphone-14 carousel.jpg";
import oneplus_plus_3 from "../../Images/oneplus-plus-3-5g-at-poorvika-01 carousel.jpg";
import galaxy_z_fold from "../../Images/galaxy-Z-fold5-Z-flip5-web carousel.jpg";
import Redmi_12 from "../../Images/Redmi-12-smartphone-2 carousel.jpg";
import OPPO_A78 from "../../Images/OPPO-A78 carousel.jpg";
import Realme_11x from "../../Images/Realme-11-11X-mobiles-01 carousel.jpg";
import Vivo_V29e from "../../Images/Vivo-V29e-smartphone carousel.jpg";
import Vivo_y27 from "../../Images/Vivo-Y27 carousel.jpg";

export default function Carousell() {
  let data = [
    applec,
    oneplus_plus_3,
    galaxy_z_fold,
    Redmi_12,
    OPPO_A78,
    Realme_11x,
    Vivo_V29e,
    Vivo_y27,
  ];
  return (
    <div className="Carousell">
      <Carousel >
        {data.map((data, idx) => {
          return (
            <Carousel.Item key={idx} interval={1500}>
              <img className="Carousell" src={data} alt="" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
