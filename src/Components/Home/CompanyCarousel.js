import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 
import Apple from "../../Images/company icons/Apple-logo.png";
import mi from "../../Images/company icons/mi logo.png";
import oneplus from "../../Images/company icons/one-plus-logo.png";
import oppo from "../../Images/company icons/oppo-logo.png";
import realme from "../../Images/company icons/realme-logo-1.png";
import samsung from "../../Images/company icons/samsung-logo.png";
import tecno from "../../Images/company icons/tecno-brand-logo.png";
import Vivo from "../../Images/company icons/Vivo-logo.png";
import Asus from "../../Images/company icons/Logo-0-0011-Group-15.png";
import Nokia from "../../Images/company icons/Logo-0-0027-Nokia.png";
import Lenovo from "../../Images/company icons/Logo-0-0034-Lenovo.png";
import moto from "../../Images/company icons/moto-logo.png";
export default function CompanyCarousel() {
  let data = [
    Apple,
    mi,
    oneplus,
    oppo,
    realme,
    samsung,
    tecno,
    Vivo,
    Asus,
    Nokia,
    Lenovo,
    moto,
    Apple,
    oneplus, 
    oppo,
    realme,
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="CompanyCarousel">
      <Carousel responsive={responsive} className="logos-div"> 
          {data.map((data, idx) => {
            return (
              <div style={{ textAlign: "center" }}>
                <img
                  style={{ width: "60px", height: "60px" }}
                  variant="top"
                  src={data}
                />
              </div>
            );
          })} 
      </Carousel>
    </div>
  );
}
